using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public class RoomModel : IRoom
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public int Capacity { get; set; }
        public int Status { get; set; }
        public string Remarks { get; set; }
    }

    public interface IRoom
    {
        int Id { get; set; }
        string Number { get; set; }
        int Capacity { get; set; }
        int Status { get; set; }
        string Remarks { get; set; }
    }
}
