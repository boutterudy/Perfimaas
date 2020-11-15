import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Expense } from './interfaces/expense.interface';
import { DeleteUserDto } from './dto/delete-user.dto';
import { DeleteExpenseDto } from './dto/delete-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { BankAccount } from './interfaces/bank-account.interface';
import { DeleteBankAccountDto } from './dto/delete-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Goal } from './interfaces/goal.interface';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { DeleteGoalDto } from './dto/delete-goal.dto';
import { DeleteCashFlowDistributionDto } from './dto/delete-cash-flow-distribution.dto';
import { UpdateCashFlowDistributionDto } from './dto/update-cash-flow-distribution.dto';
import { CreateCashFlowDistributionDto } from './dto/create-cash-flow-distribution.dto';
import { CashFlowDistribution } from './interfaces/cash-flow-distribution.interface';
import { Usage } from './interfaces/usage.interface';
import { CreateUsageDto } from './dto/create-usage.dto';
import { UpdateUsageDto } from './dto/update-usage.dto';
import { DeleteUsageDto } from './dto/delete-usage.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Injectable()
export class UsersService {
  private users: User[];
  constructor() {
    this.users = [
      {
        id: 1,
        email: "btte.rudy@gmail.com",
        password: "myAwesomePassword",
        netMonthlyIncome: 1200.85,
        fixedMonthlyExpenses: [
          {
            id: 1,
            title: "OVH - VPS",
            amount: 15.59,
          },
          {
            id: 2,
            title: "OVH - rudyboutte.com",
            amount: 1.00,
          },
          {
            id: 3,
            title: "OVH - bonalim.com",
            amount: 1.00,
          },
          {
            id: 4,
            title: "OVH - rudy.cloud",
            amount: 1.80,
          },
        ],
        variableMonthlyExpenses: [
          {
            id: 1,
            title: "Fuel",
            amount: 90.00,
          },
          {
            id: 2,
            title: "Shopping",
            amount: 0.00,
          },
          {
            id: 3,
            title: "Pleasures",
            amount: 100.00,
          },
        ],
        bankAccounts: [
          {
            id: 1,
            bank: "CIC (current account)",
            charges: 6.00,
            usages: [
              {
                type: 1,
                description: "Monthly income",
              },
              {
                type: 2,
                description: "Fixed monthly expenses",
              },
            ],
          },
          {
            id: 2,
            bank: "N26",
            charges: 0.00,
            usages: [
              {
                type: 3,
                description: "Daily (variable) expenses",
              },
            ],
          },
          {
            id: 3,
            bank: "CIC (savings account)",
            charges: 0,
            usages: [
              {
                type: 4,
                description: "Saving",
              },
            ],
          },
          {
            id: 4,
            bank: "Coinbase",
            charges: 0.00,
            usages: [
              {
                type: 5,
                description: "Investments",
              },
            ],
          },
        ],
        surplusCashFlowManagement: [
          {
            id: 1,
            title: "Saving",
            percentage:16.67,
            bankAccount: 3,
          },
          {
            id: 2,
            title: "Investments",
            percentage:83.33,
            bankAccount: 4,
          },
        ],
        unexpectedCashFlowManagement: [
          {
            id: 1,
            title: "To make myself happy and to please others",
            percentage: 33,
            bankAccount: 2,
          },
          {
            id: 2,
            title: "In savings",
            percentage: 13,
            bankAccount: 3,
          },
          {
            id: 3,
            title: "In investments",
            percentage: 50,
            bankAccount: 4,
          },
          {
            id: 4,
            title: "Donation to charity",
            percentage: 4,
          },
        ],
        safetySavingsGoal: 4,
        goals: [
          {
            id: 1,
            title: "Travel to Vietnam and Cambodia",
            amount: 4076.00,
            priority: 1,
          },
        ],
      },
    ];
  }


  // Users
  getAll(): User[] {
    return this.users;
  }

  getById(id: number): User | NotFoundException  {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user;
    }
  }

  createUser(user: CreateUserDto): User[] {
    this.users = [...this.users, user];
    return this.users;
  }

  updateUser(id: number, updatedUser: UpdateUserDto): User | NotFoundException  {
    const user = this.users.find(u => u.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      if(updatedUser.email) {
        user.email = updatedUser.email;
      }

      if(updatedUser.password) {
        user.password = updatedUser.password;
      }

      if(updatedUser.netMonthlyIncome) {
        user.netMonthlyIncome = updatedUser.netMonthlyIncome;
      }

      if(updatedUser.fixedMonthlyExpenses) {
        user.fixedMonthlyExpenses = updatedUser.fixedMonthlyExpenses;
      }

      if(updatedUser.variableMonthlyExpenses) {
        user.variableMonthlyExpenses = updatedUser.variableMonthlyExpenses;
      }

      if(updatedUser.bankAccounts) {
        user.bankAccounts = updatedUser.bankAccounts;
      }

      if(updatedUser.surplusCashFlowManagement) {
        user.surplusCashFlowManagement = updatedUser.surplusCashFlowManagement;
      }

      if(updatedUser.unexpectedCashFlowManagement) {
        user.unexpectedCashFlowManagement = updatedUser.unexpectedCashFlowManagement;
      }

      if(updatedUser.safetySavingsGoal) {
        user.safetySavingsGoal = updatedUser.safetySavingsGoal;
      }

      if(updatedUser.goals) {
        user.goals = updatedUser.goals;
      }

      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user;
    }
  }

  deleteUser(id: number): DeleteUserDto | NotFoundException {
    const user = this.users.find(u => u.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const nbOfUsersBeforeDelete = this.users.length;
      this.users = this.users.filter(u => u.id !== id);
      return {
        usersDeleted: nbOfUsersBeforeDelete - this.users.length,
        nbUsersAfterDelete: this.users.length,
      }
    }
  }

  // User email
  async getByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  updateEmail(id: number, updatedEmail: UpdateEmailDto): User | NotFoundException {
    const user = this.users.find(u => u.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      if(updatedEmail) {
        user.email = updatedEmail.email;
      }
    }
  }

  // User password
  updatePassword(id: number, updatedPassword: UpdatePasswordDto): User | NotFoundException {
    const user = this.users.find(u => u.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      if(updatedPassword) {
        user.password = updatedPassword.password;
      }
    }
  }

  // Users fixed monthly expenses
  getFixedMonthlyExpenses(id: number): Expense[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user.fixedMonthlyExpenses;
    }
  }

  getFixedMonthlyExpenseById(id: number, expenseId: number): Expense | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const expense = user.fixedMonthlyExpenses.find(expense => expense.id === expenseId);
      if(!expense) {
        return new NotFoundException('Cannot find any expense with id ' + id);
      } else {
        return expense;
      }
    }
  }

  createFixedMonthlyExpense(id: number, newExpense: Expense): Expense[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      user.fixedMonthlyExpenses = [...user.fixedMonthlyExpenses, newExpense];
      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user.fixedMonthlyExpenses;
    }
  }

  updateFixedMonthlyExpense(id: number, expenseId: number, updatedExpense: UpdateExpenseDto): Expense | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const fixedMonthlyExpense = user.fixedMonthlyExpenses.find(expense => expense.id === expenseId);
      if(!fixedMonthlyExpense) {
        return new NotFoundException('Cannot find any expense with id ' + expenseId);
      } else {
        if(updatedExpense.title) {
          fixedMonthlyExpense.title = updatedExpense.title;
        }

        if(updatedExpense.hasOwnProperty('amount')) {
          fixedMonthlyExpense.amount = updatedExpense.amount;
        }

        user.fixedMonthlyExpenses = [...user.fixedMonthlyExpenses.map(e => e.id !== expenseId ? e : fixedMonthlyExpense)];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return this.users.find(u => u.id === id).fixedMonthlyExpenses.find(expense => expense.id === expenseId);
      }
    }
  }

  deleteFixedMonthlyExpense(id: number, expenseId: number): DeleteExpenseDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const fixedMonthlyExpense = user.fixedMonthlyExpenses.find(expense => expense.id === expenseId);
      if(!fixedMonthlyExpense) {
        return new NotFoundException('Cannot find any expense with id ' + id);
      } else {
        const nbOfExpensesBeforeDelete = user.fixedMonthlyExpenses.length;
        user.fixedMonthlyExpenses = user.fixedMonthlyExpenses.filter(e => e.id !== expenseId);
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return {
          expensesDeleted: nbOfExpensesBeforeDelete - user.fixedMonthlyExpenses.length,
          nbExpensesAfterDelete: user.fixedMonthlyExpenses.length,
        }
      }
    }
  }

  // Users variable monthly expenses
  getVariableMonthlyExpenses(id: number): Expense[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user.variableMonthlyExpenses;
    }
  }

  getVariableMonthlyExpenseById(id: number, expenseId: number): Expense | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const expense = user.variableMonthlyExpenses.find(expense => expense.id === expenseId);
      if(!expense) {
        return new NotFoundException('Cannot find any expense with id ' + id);
      } else {
        return expense;
      }
    }
  }

  createVariableMonthlyExpense(id: number, newExpense: CreateExpenseDto): Expense[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      user.variableMonthlyExpenses = [...user.variableMonthlyExpenses, newExpense];
      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user.variableMonthlyExpenses;
    }
  }

  updateVariableMonthlyExpense(id: number, expenseId: number, updatedExpense: UpdateExpenseDto): Expense | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const variableMonthlyExpense = user.variableMonthlyExpenses.find(expense => expense.id === expenseId);
      if(!variableMonthlyExpense) {
        return new NotFoundException('Cannot find any expense with id ' + expenseId);
      } else {
        if(updatedExpense.title) {
          variableMonthlyExpense.title = updatedExpense.title;
        }

        if(updatedExpense.hasOwnProperty('amount')) {
          variableMonthlyExpense.amount = updatedExpense.amount;
        }

        user.variableMonthlyExpenses = [...user.variableMonthlyExpenses.map(e => e.id !== expenseId ? e : variableMonthlyExpense)];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return this.users.find(u => u.id === id).variableMonthlyExpenses.find(expense => expense.id === expenseId);
      }
    }
  }

  deleteVariableMonthlyExpense(id: number, expenseId: number): DeleteExpenseDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const variableMonthlyExpense = user.variableMonthlyExpenses.find(expense => expense.id === expenseId);
      if(!variableMonthlyExpense) {
        return new NotFoundException('Cannot find any expense with id ' + id);
      } else {
        const nbOfExpensesBeforeDelete = user.variableMonthlyExpenses.length;
        user.variableMonthlyExpenses = user.variableMonthlyExpenses.filter(e => e.id !== expenseId);
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return {
          expensesDeleted: nbOfExpensesBeforeDelete - user.variableMonthlyExpenses.length,
          nbExpensesAfterDelete: user.variableMonthlyExpenses.length,
        }
      }
    }
  }

  // Users bank accounts
  getBankAccounts(id: number): BankAccount[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user.bankAccounts;
    }
  }

  getBankAccountById(id: number, bankAccountId: number): BankAccount | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccount = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccount) {
        return new NotFoundException('Cannot find any bank account with id ' + id);
      } else {
        return bankAccount;
      }
    }
  }

  createBankAccounts(id: number, newBankAccount: CreateBankAccountDto): BankAccount[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      user.bankAccounts = [...user.bankAccounts, newBankAccount];
      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user.bankAccounts;
    }
  }

  updateBankAccounts(id: number, bankAccountId: number, updatedBankAccount: UpdateBankAccountDto): BankAccount | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccount = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccount) {
        return new NotFoundException('Cannot find any bank account with id ' + bankAccountId);
      } else {
        if(updatedBankAccount.bank) {
          bankAccount.bank = updatedBankAccount.bank;
        }

        if(updatedBankAccount.hasOwnProperty('charges')) {
          bankAccount.charges = updatedBankAccount.charges;
        }
        if(updatedBankAccount.usages) {
          bankAccount.usages = updatedBankAccount.usages;
        }

        user.bankAccounts = [...user.bankAccounts.map(e => e.id !== bankAccountId ? e : bankAccount)];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return this.users.find(u => u.id === id).bankAccounts.find(ba => ba.id === bankAccountId);
      }
    }
  }

  deleteBankAccounts(id: number, bankAccountId: number): DeleteBankAccountDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccounts = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccounts) {
        return new NotFoundException('Cannot find any bank account with id ' + id);
      } else {
        const nbOfBankAccountsBeforeDelete = user.bankAccounts.length;
        user.bankAccounts = user.bankAccounts.filter(ba => ba.id !== bankAccountId);
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return {
          bankAccountsDeleted: nbOfBankAccountsBeforeDelete - user.bankAccounts.length,
          nbBankAccountsAfterDelete: user.bankAccounts.length,
        }
      }
    }
  }

  // Users goals
  getGoals(id: number): Goal[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user.goals;
    }
  }

  getGoalById(id: number, goalId: number): Goal | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const goal = user.goals.find(g => g.id === goalId);
      if(!goal) {
        return new NotFoundException('Cannot find any goal with id ' + id);
      } else {
        return goal;
      }
    }
  }

  createGoal(id: number, newGoal: CreateGoalDto): Goal[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      user.goals = [...user.goals, newGoal];
      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user.goals;
    }
  }

  updateGoal(id: number, goalId: number, updatedGoal: UpdateGoalDto): Goal | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const goal = user.goals.find(g => g.id === goalId);
      if(!goal) {
        return new NotFoundException('Cannot find any goal with id ' + goalId);
      } else {
        if(updatedGoal.title) {
          goal.title = updatedGoal.title;
        }

        if(updatedGoal.hasOwnProperty('amount')) {
          goal.amount = updatedGoal.amount;
        }

        if(updatedGoal.hasOwnProperty('priority')) {
          goal.priority = updatedGoal.priority;
        }

        user.goals = [...user.goals.map(g => g.id !== goalId ? g : goal)];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return this.users.find(u => u.id === id).goals.find(g => g.id === goalId);
      }
    }
  }

  deleteGoal(id: number, goalId: number): DeleteGoalDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const goal = user.goals.find(g => g.id === goalId);
      if(!goal) {
        return new NotFoundException('Cannot find any goal with id ' + id);
      } else {
        const nbOfGoalsBeforeDelete = user.goals.length;
        user.goals = user.goals.filter(g => g.id !== goalId);
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return {
          goalsDeleted: nbOfGoalsBeforeDelete - user.goals.length,
          nbGoalsAfterDelete: user.goals.length,
        }
      }
    }
  }

  // Users bank accounts usages
  getBankAccountUsages(id: number, bankAccountId: number): Usage[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccount = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccount) {
        return new NotFoundException('Cannot find any bank account with id ' + bankAccountId);
      } else {
        return bankAccount.usages;
      }
    }
  }

  createBankAccountUsage(id: number, bankAccountId: number, newUsage: CreateUsageDto): Usage[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccount = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccount) {
        return new NotFoundException('Cannot find any bank account with id ' + bankAccountId);
      } else {
        bankAccount.usages = [...bankAccount.usages, newUsage];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return bankAccount.usages;
      }
    }
  }

  updateBankAccountUsage(id: number, bankAccountId: number, usageType:number ,updatedUsage: UpdateUsageDto): Usage | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccount = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccount) {
        return new NotFoundException('Cannot find any bank account with id ' + bankAccountId);
      } else {
        const usage = bankAccount.usages.find(u => u.type === usageType);
        if(!usage) {
          return new NotFoundException('Cannot find any usage with type ' + bankAccountId);
        } else {
          if(updatedUsage.description) {
            usage.description = updatedUsage.description;
          }
          bankAccount.usages = [...bankAccount.usages.map(u => u.type !== usageType ? u : usage)];
          user.bankAccounts = [...user.bankAccounts.map(ba => ba.id !== bankAccountId ? ba : bankAccount)];
          this.users = [...this.users.map(u => u.id !== id ? u : user)];
          return this.users.find(u => u.id === id).bankAccounts.find(ba => ba.id === bankAccountId).usages.find(u => u.type === usageType);
        }
      }
    }
  }

  deleteBankAccountUsage(id: number, bankAccountId: number, usageType: number): DeleteUsageDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const bankAccount = user.bankAccounts.find(ba => ba.id === bankAccountId);
      if(!bankAccount) {
        return new NotFoundException('Cannot find any bank account with id ' + bankAccountId);
      } else {
        const usage = bankAccount.usages.find(u => u.type === usageType);
        if(!usage) {
          return new NotFoundException('Cannot find any usage with type ' + bankAccountId);
        } else {
          const nbOfUsagesBeforeDelete = bankAccount.usages.length;
          bankAccount.usages = bankAccount.usages.filter(u => u.type !== usageType);
          this.users = [...this.users.map(u => u.id !== id ? u : user)];
          return {
            usagesDeleted: nbOfUsagesBeforeDelete - bankAccount.usages.length,
            nbUsagesAfterDelete: user.goals.length,
          }
        }
      }
    }
  }

  // Users surplus cash-flow management
  getSurplusCashFlowManagement(id: number): CashFlowDistribution[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user.surplusCashFlowManagement;
    }
  }

  getSurplusCashFlowManagementById(id: number, cashFlowDistributionId: number): CashFlowDistribution | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const cashFlowDistribution = user.surplusCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      if(!cashFlowDistribution) {
        return new NotFoundException('Cannot find any cash-flow distribution with id ' + id);
      } else {
        return cashFlowDistribution;
      }
    }
  }

  createSurplusCashFlowManagement(id: number, newCashFlowDistribution: CreateCashFlowDistributionDto): CashFlowDistribution[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      user.surplusCashFlowManagement = [...user.surplusCashFlowManagement, newCashFlowDistribution];
      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user.surplusCashFlowManagement;
    }
  }

  updateSurplusCashFlowManagement(id: number, cashFlowDistributionId: number, updatedCashFlowDistribution: UpdateCashFlowDistributionDto): CashFlowDistribution | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const cashFlowDistribution = user.surplusCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      if(!cashFlowDistribution) {
        return new NotFoundException('Cannot find any cash-flow distribution with id ' + cashFlowDistributionId);
      } else {
        if(updatedCashFlowDistribution.title) {
          cashFlowDistribution.title = updatedCashFlowDistribution.title;
        }

        if(updatedCashFlowDistribution.hasOwnProperty('percentage')) {
          cashFlowDistribution.percentage = updatedCashFlowDistribution.percentage;
        }

        if(updatedCashFlowDistribution.hasOwnProperty('bankAccount')) {
          cashFlowDistribution.bankAccount = updatedCashFlowDistribution.bankAccount;
        }

        user.surplusCashFlowManagement = [...user.surplusCashFlowManagement.map(cfd => cfd.id !== cashFlowDistributionId ? cfd : cashFlowDistribution)];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return this.users.find(u => u.id === id).surplusCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      }
    }
  }

  deleteSurplusCashFlowManagement(id: number, cashFlowDistributionId: number): DeleteCashFlowDistributionDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const cashFlowDistribution = user.surplusCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      if(!cashFlowDistribution) {
        return new NotFoundException('Cannot find any cash-flow distribution with id ' + id);
      } else {
        const nbOfCashFlowDistributionsBeforeDelete = user.surplusCashFlowManagement.length;
        user.surplusCashFlowManagement = user.surplusCashFlowManagement.filter(cfd => cfd.id !== cashFlowDistributionId);
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return {
          CashFlowDistributionsDeleted: nbOfCashFlowDistributionsBeforeDelete - user.surplusCashFlowManagement.length,
          nbCashFlowDistributionsAfterDelete: user.surplusCashFlowManagement.length,
        }
      }
    }
  }

  // Users unexpected cash-flow management
  getUnexpectedCashFlowManagement(id: number): CashFlowDistribution[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      return user.unexpectedCashFlowManagement;
    }
  }

  getUnexpectedCashFlowManagementById(id: number, cashFlowDistributionId: number): CashFlowDistribution | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const cashFlowDistribution = user.unexpectedCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      if(!cashFlowDistribution) {
        return new NotFoundException('Cannot find any cash-flow distribution with id ' + id);
      } else {
        return cashFlowDistribution;
      }
    }
  }

  createUnexpectedCashFlowManagement(id: number, newCashFlowDistribution: CreateCashFlowDistributionDto): CashFlowDistribution[] | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      user.unexpectedCashFlowManagement = [...user.unexpectedCashFlowManagement, newCashFlowDistribution];
      this.users = [...this.users.map(u => u.id !== id ? u : user)];
      return user.unexpectedCashFlowManagement;
    }
  }

  updateUnexpectedCashFlowManagement(id: number, cashFlowDistributionId: number, updatedCashFlowDistribution: UpdateCashFlowDistributionDto): CashFlowDistribution | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const cashFlowDistribution = user.unexpectedCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      if(!cashFlowDistribution) {
        return new NotFoundException('Cannot find any cash-flow distribution with id ' + cashFlowDistributionId);
      } else {
        if(updatedCashFlowDistribution.title) {
          cashFlowDistribution.title = updatedCashFlowDistribution.title;
        }

        if(updatedCashFlowDistribution.hasOwnProperty('percentage')) {
          cashFlowDistribution.percentage = updatedCashFlowDistribution.percentage;
        }

        if(updatedCashFlowDistribution.hasOwnProperty('bankAccount')) {
          cashFlowDistribution.bankAccount = updatedCashFlowDistribution.bankAccount;
        }

        user.unexpectedCashFlowManagement = [...user.unexpectedCashFlowManagement.map(cfd => cfd.id !== cashFlowDistributionId ? cfd : cashFlowDistribution)];
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return this.users.find(u => u.id === id).unexpectedCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      }
    }
  }

  deleteUnexpectedCashFlowManagement(id: number, cashFlowDistributionId: number): DeleteCashFlowDistributionDto | NotFoundException {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      return new NotFoundException('Cannot find any user with id ' + id);
    } else {
      const cashFlowDistribution = user.unexpectedCashFlowManagement.find(cfd => cfd.id === cashFlowDistributionId);
      if(!cashFlowDistribution) {
        return new NotFoundException('Cannot find any cash-flow distribution with id ' + id);
      } else {
        const nbOfCashFlowDistributionsBeforeDelete = user.unexpectedCashFlowManagement.length;
        user.unexpectedCashFlowManagement = user.unexpectedCashFlowManagement.filter(cfd => cfd.id !== cashFlowDistributionId);
        this.users = [...this.users.map(u => u.id !== id ? u : user)];
        return {
          CashFlowDistributionsDeleted: nbOfCashFlowDistributionsBeforeDelete - user.unexpectedCashFlowManagement.length,
          nbCashFlowDistributionsAfterDelete: user.unexpectedCashFlowManagement.length,
        }
      }
    }
  }
}
