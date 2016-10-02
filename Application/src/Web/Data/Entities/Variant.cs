
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Variant : Entity
    {
        public int Stock { get; set; }

        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }

        public int ColorId { get; set; }
        [ForeignKey("ColorId")]
        public virtual Color Color { get; set; }

        public int SizeId { get; set; }
        [ForeignKey("SizeId")]
        public virtual Size Size { get; set; }
    }
}
