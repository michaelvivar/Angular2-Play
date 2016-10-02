using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Linq;
using Web.Enums;
using Web.Validators;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Routing;

namespace Web.Filters
{
    public class ValidateModelAttribute : ActionFilterAttribute
    {
        public Type Validator { get; set; }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            context.ModelState.Clear();

            var validator = (IValidator)context.HttpContext.RequestServices.GetService(Validator);
            validator.ModelObject = context.ActionArguments.LastOrDefault().Value;

            if (!validator.Validate())
            {
                context.Result = new OkObjectResult(new { Status = Status.Error, Errors = validator.Errors().Select(o => new { Field = o.Key, Message = o.Value }) });
            }
        }

        //public override void OnActionExecuting(ActionExecutingContext context)
        //{
        //    string action = context.ActionDescriptor.DisplayName;
        //    context.ModelState.Clear();

        //    var validator = (IValidator)context.HttpContext.RequestServices.GetService(Validator);
        //    validator.Init(context.ActionArguments.LastOrDefault().Value);

        //    if (!validator.Validate())
        //        foreach (var error in validator.Errors())
        //            context.ModelState.AddModelError(error.Key, error.Value);

        //    if (!context.ModelState.IsValid)
        //    {
        //        context.Result = new BadRequestObjectResult(context.ModelState);
        //    }
        //}
    }
}
