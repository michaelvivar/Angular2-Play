using System.Collections.Generic;
using System.Linq;
using Web.Data.Entities;
using Web.Models;
using Web.Enums;
using Web.Interfaces;
using System.Threading.Tasks;

namespace Web.Data.Repositories
{
    public class LocationRepository : Repository<Location>, ILocationRepository
    {
        public LocationRepository(DataContext context) : base(context)
        {
        }

        public ILocation Get(int id)
        {
            return MapEntityToModel(SingleOrDefault(o => o.Id == id));
        }

        public async Task<IEnumerable<ICountry>> Countries()
        {
            return await Task.Run(() => Get(o => o.Type == LocationType.Country).OrderBy(o => o.Name).Select(o => (ICountry)MapEntityToModel(o)).ToList());
        }

        public async Task<IEnumerable<IProvince>> Provinces()
        {
            return await Task.Run(() => Get(o => o.Type == LocationType.Province).OrderBy(o => o.Name).Select(o => (IProvince)MapEntityToModel(o)).ToList());
        }

        public async Task<IEnumerable<ICity>> Cities()
        {
            return await Task.Run(() => Get(o => o.Type == LocationType.City).OrderBy(o => o.Name).Select(o => (ICity)MapEntityToModel(o)).ToList());
        }

        public ILocation MapEntityToModel(Location entity)
        {
            return new LocationModel
            {
                Id = entity.Id,
                Name = entity.Name,
                Code = entity.Code,
                Type = entity.Type
            };
        }

        public Location MapModelToEntity(ILocation model)
        {
            return new Location
            {
                Id = model.Id,
                Name = model.Name,
                Code = model.Code,
                Type = model.Type
            };
        }

        public void AddLocation(ICountry model)
        {
            var entity = MapModelToEntity(model);
            Add(entity).Save();
            model.Id = entity.Id;
        }

        public void UpdateLocation(ICountry model)
        {
            Update(MapModelToEntity(model)).Save();
        }

        public void DeleteLocation(int id)
        {
            var entity = SingleOrDefault(o => o.Id == id);
            if (entity != null)
                Remove(entity).Save();
        }

        public bool CheckLocationNameExists(int id, string name, LocationType type)
        {
            return Get(o => o.Name == name && o.Type == type && (id == 0 ? true : o.Id != id)).Any();
        }
    }

    public interface ILocationRepository
    {
        ILocation Get(int id);
        Task<IEnumerable<ICountry>> Countries();
        Task<IEnumerable<IProvince>> Provinces();
        Task<IEnumerable<ICity>> Cities();
        void AddLocation(ICountry model);
        void UpdateLocation(ICountry model);
        void DeleteLocation(int id);
        bool CheckLocationNameExists(int id, string name, LocationType type);
    }
}
