using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Web.Enums;

namespace Web.Data.Entities
{
    public class Address : Entity
    {
        public string HouseNumber { get; set; }
        public string Street { get; set; }

        public int CountryId { get; set; }
        [ForeignKey("CountryId")]
        public virtual Location Country { get; set; }

        public int ProvinceId { get; set; }
        [ForeignKey("ProvinceId")]
        public virtual Location Province { get; set; }

        public int CityId { get; set; }
        [ForeignKey("CityId")]
        public virtual Location City { get; set; }
    }
}
