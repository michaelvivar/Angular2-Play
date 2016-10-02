using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Contact : Entity
    {
        public string Email { get; set; }
        public string TelePhone { get; set; }
        public string MobilePhone { get; set; }
    }
}
