using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Company : Entity
    {
        public string Name { get; set; }

        public int PersonId { get; set; }
        [ForeignKey("PersonId")]
        public virtual Person ContactPerson { get; set; }

        public int ContactId { get; set; }
        [ForeignKey("ContactId")]
        public virtual Contact Contact { get; set; }
    }
}
