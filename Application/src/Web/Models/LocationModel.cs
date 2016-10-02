using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web.Data.Repositories;
using Web.Enums;
using Web.Helpers;
using Web.Interfaces;

namespace Web.Models
{
    public class LocationModel : ICountry, IProvince, ICity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public LocationType Type { get; set; }

        public int Number { get; set; }
    }
}
