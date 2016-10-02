using System.Collections.Generic;
using Web.Helpers;

namespace Web.Validators
{
    public abstract class Validator<TModel>
    {
        private TModel _model { get; set; }

        public object ModelObject
        {
            set
            {
                _model = (TModel)value;
                _helper = new ValidationResultHelper<TModel>(_model);
            }
        }

        public TModel Model
        {
            get
            {
                return _model;
            }
        }

        protected IValidationResultHelper<TModel> _helper { get; set; }

        public List<KeyValuePair<string, string>> Errors()
        {
            return _helper.Errors;
        }
    }

    public abstract class Validator<TModel, TRepository> : Validator<TModel>
    {
        protected TRepository _repository { get; set; }
    }

    public interface IValidator
    {
        object ModelObject { set; }
        bool Validate();
        List<KeyValuePair<string, string>> Errors();
    }
}
