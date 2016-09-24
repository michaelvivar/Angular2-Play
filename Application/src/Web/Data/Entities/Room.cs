using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Entities
{
    public class Room : Entity
    {
        public string Number { get; set; }
        public int Capacity { get; set; }
        public int Status { get; set; }
    }
}
