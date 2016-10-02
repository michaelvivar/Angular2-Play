using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Enums;

namespace Web.Interfaces
{
    public interface ILocation
    {
        int Id { get; set; }
        string Name { get; set; }
        string Code { get; set; }
        LocationType Type { get; set; }
    }

    public interface ICountry : ILocation
    {

    }

    public interface IProvince : ILocation
    {

    }

    public interface ICity : ILocation
    {

    }
}
