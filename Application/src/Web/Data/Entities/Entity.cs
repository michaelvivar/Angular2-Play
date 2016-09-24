using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Entity
    {
        [Key]
        public int Id { get; set; }
        public string Remarks { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
