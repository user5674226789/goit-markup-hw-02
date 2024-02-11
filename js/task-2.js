const getUsersWithFriend = (users, friendName) => {
  const filteredUsers = users.filter((user) => {
    return user.friends.some((friend) => friend === friendName);
  });
  return filteredUsers;
}
