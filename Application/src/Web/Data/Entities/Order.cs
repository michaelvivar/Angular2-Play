using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Data.Entities
{
    public class Order : Entity
    {
        public int ItemId { get; set; }
        [ForeignKey("ItemId")]
        public virtual Item Item { get; set; }

        public int TransactionId { get; set; }
        [ForeignKey("TransactionId")]
        public virtual Transaction Transaction { get; set; }
    }
}
