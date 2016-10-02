using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Web.Data.Entities;

namespace Web.Data.Repositories
{
    public class Repository<TEntity> : IRepository where TEntity : Entity
    {
        private readonly DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;
        }

        protected IRepository Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            return this;
        }

        protected IRepository AddRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().AddRange(entities);
            return this;
        }

        protected IQueryable<TEntity> Get()
        {
            return _context.Set<TEntity>();
        }

        protected IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            return _context.Set<TEntity>().Where(predicate);
        }

        protected IRepository Remove(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
            return this;
        }

        protected IRepository RemoveRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().RemoveRange(entities);
            return this;
        }

        protected IRepository Set(TEntity entity, params Expression<Func<TEntity, object>>[] property)
        {
            throw new NotImplementedException();
        }

        protected TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return _context.Set<TEntity>().SingleOrDefault(predicate);
        }

        protected IRepository Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            return this;
        }

        protected IRepository Update(TEntity entity, params Expression<Func<TEntity, object>>[] exclude)
        {
            return this;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }

    public interface IRepository<TEntity>   
    {
        IRepository Add(TEntity entity);
        IRepository AddRange(IEnumerable<TEntity> entities);
        IRepository Remove(TEntity entity);
        IRepository RemoveRange(IEnumerable<TEntity> entities);
        IRepository Update(TEntity entity);
        IRepository Update(TEntity entity, params Expression<Func<TEntity, object>>[] exclude);
        IRepository Set(TEntity entity, params Expression<Func<TEntity, object>>[] property);
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);
        IQueryable<TEntity> Get();
        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
    }

    public interface IRepository
    {
        void Save();
    }
}
