﻿using System.Linq;
using Ioc.Core.Data;
using Ioc.Data;

namespace Ioc.Service
{
    public class UserService : IUserService
    {
        private IRepository<User> userRepository;

        public UserService(IRepository<User> userRepository)
        {
            this.userRepository = userRepository;
        }

        public IQueryable<User> GetUsers()
        {
            return userRepository.Table;
        }

        public User GetUser(long id)
        {
            return userRepository.GetById(id);
        }

        public void InsertUser(User user)
        {
            userRepository.Insert(user);
        }

        public void UpdateUser(User user)
        {
            userRepository.Update(user);
        }

        public void DeleteUser(User user)
        { 
            userRepository.Delete(user);
        }
    }
}
