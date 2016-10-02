using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Cart : Entity
    {
        public int ItemId { get; set; }
        [ForeignKey("ItemId")]
        public virtual Item Item { get; set; }

        public int CostumerId { get; set; }
        [ForeignKey("CostumerId")]
        public virtual Costumer Costumer { get; set; }
    }
}
