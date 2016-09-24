using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Web.Data.Entities;
using Web.Models;

namespace Web.Data.Repositories
{
    public class RoomRepository : Repository<Room>, IRoomRepository
    {
        public RoomRepository(DataContext context) : base(context)
        {
        }

        public IEnumerable<IRoom> Rooms()
        {
            return Get().Select(o => MapEntityToModel(o)).ToList();
        }

        public IRoom MapEntityToModel(Room entity)
        {
            return new RoomModel
            {
                Id = entity.Id,
                Number = entity.Number,
                Capacity = entity.Capacity,
                Status = entity.Status,
                Remarks = entity.Remarks
            };
        }
    }

    public interface IRoomRepository
    {
        IEnumerable<IRoom> Rooms();
    }
}
