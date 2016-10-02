using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Image : Entity
    {
        public string File { get; set; }
        public string Path { get; set; }

        public int VariantId { get; set; }
        [ForeignKey("VariantId")]
        public virtual Variant variant { get; set; }
    }
}
