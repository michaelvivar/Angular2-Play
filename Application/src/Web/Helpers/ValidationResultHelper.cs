using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Helpers
{
    public class ValidationResultHelper
    {

    }

    public abstract class Validator<T1, T2> where T1 : IValidator where T2 : IValidator
    {
        public T1 ErrorMsg(string message)
        {
            return (T1)Instance();
        }

        public T2 Required(bool require)
        {
            return (T2)Instance();
        }

        protected abstract IValidator Instance();
    }

    public class StringValidator : Validator<IStringValidator1, IStringValidator2>,
        IValidator_Required<IStringValidator2>,
        IStringValidator1, IStringValidator2, IValidator
    {
        public IStringValidator2 MinLength(int length)
        {
            return this;
        }

        protected override IValidator Instance()
        {
            return this;
        }
    }

    public interface IValidator
    {

    }

    public interface IValidator_Required<T> : IValidator
    {
        T Required(bool required);
    }

    public interface IStringValidator1 : IValidator
    {
        IStringValidator2 MinLength(int length);
    }

    public interface IStringValidator2 : IStringValidator1
    {
        IStringValidator1 ErrorMsg(string message);
    }
}
