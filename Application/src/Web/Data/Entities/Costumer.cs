using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Costumer : Entity
    {
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual  User User { get; set; }

        public int PersonId { get; set; }
        [ForeignKey("PersonId")]
        public virtual Person Person { get; set; }
    }
}
