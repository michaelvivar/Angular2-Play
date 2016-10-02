using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Category : Entity
    {
        public string Name { get; set; }
        public int ParentId { get; set; }
    }
}
