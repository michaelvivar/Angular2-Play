using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Web.Enums;

namespace Web.Data.Entities
{
    public class Location : Entity
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public LocationType Type { get; set; }
        public int ParentId { get; set; }
    }
}
