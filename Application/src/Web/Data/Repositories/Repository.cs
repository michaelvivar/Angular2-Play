using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using Web.Data.Entities;

namespace Web.Data.Repositories
{
    public class Repository<TEntity> : IRepository, IRepository<TEntity> where TEntity : Entity
    {
        private readonly DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;
        }

        public IRepository Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            return this;
        }

        public IRepository AddRange(IEnumerable<TEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> Get()
        {
            return _context.Set<TEntity>();
        }

        public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public TEntity Get(int id)
        {
            throw new NotImplementedException();
        }

        public IRepository Remove(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IRepository RemoveRange(IEnumerable<TEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IRepository Set(TEntity entity, params Expression<Func<TEntity, object>>[] property)
        {
            throw new NotImplementedException();
        }

        public TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IRepository Update(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IRepository Update(TEntity entity, params Expression<Func<TEntity, object>>[] exclude)
        {
            throw new NotImplementedException();
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
        TEntity Get(int id);
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);
        IQueryable<TEntity> Get();
        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
    }

    public interface IRepository
    {
        void Save();
    }
}
