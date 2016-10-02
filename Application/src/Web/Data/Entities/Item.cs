using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Item : Entity
    {
        public double Price { get; set; }
        public string Description { get; set; }

        public int VariantId { get; set; }
        [ForeignKey("VariantId")]
        public virtual Variant Variant { get; set; }
    }
}
