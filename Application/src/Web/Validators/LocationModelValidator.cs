using Web.Data.Repositories;
using Web.Models;

namespace Web.Validators
{
    public class LocationModelValidator : Validator<LocationModel, ILocationRepository>, ILocationModelValidator
    {
        public LocationModelValidator(ILocationRepository repository)
        {
            _repository = repository;
        }

        public bool Validate()
        {
            _helper.Validate(m => m.Name).Required(true).NotEmpty().ErrorMsg("Name field is required");

            if (!_helper.Failed)
                _helper.Validate(m => m.Name).IF(_repository.CheckLocationNameExists(Model.Id, Model.Name, Model.Type)).ErrorMsg("Name already exists!");

            return !_helper.Failed;
        }
    }

    public interface ILocationModelValidator : IValidator
    {

    }
}
