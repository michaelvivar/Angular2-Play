using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Web.Enums;

namespace Web.Data.Entities
{
    public class Transaction : Entity
    {
        public double TotalAmount { get; set; }
        public Status Status { get; set; }
        
        public int CostumerId { get; set; }
        [ForeignKey("CostumerId")]
        public virtual Costumer Costumer { get; set; }
    }
}
