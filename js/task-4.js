const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
