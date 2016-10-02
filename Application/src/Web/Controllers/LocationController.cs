using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Data.Repositories;
using Web.Models;
using Web.Interfaces;
using Web.Filters;
using Web.Validators;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class LocationController : Controller
    {
        private readonly ILocationRepository Repository;
        public LocationController(ILocationRepository repository)
        {
            Repository = repository;
        }

        [HttpGet("Country")]
        public async Task<IEnumerable<ICountry>> Country()
        {
            return await Repository.Countries();
        }

        [HttpGet("Province")]
        public async Task<IEnumerable<IProvince>> Province()
        {
            return await Repository.Provinces();
        }

        [HttpGet("City")]
        public async Task<IEnumerable<ICity>> City()
        {
            return await Repository.Cities();
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            return Ok(Repository.Get(id));
        }

        [HttpPost]
        [ValidateModel(Validator = typeof(ILocationModelValidator))]
        public IActionResult Post([FromBody]LocationModel value)
        {
            Repository.AddLocation(value);
            return CreatedAtAction("Get", new { id = value.Id }, value);
        }

        [HttpPut("{id:int}")]
        [ValidateModel(Validator = typeof(ILocationModelValidator))]
        public IActionResult Put(int id, [FromBody]LocationModel value)
        {
            Repository.UpdateLocation(value);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            Repository.DeleteLocation(id);
            return Ok();
        }
    }
}
