// ExpenseList.js
"use client"
import { BarChart,Bar, CartesianGrid, Tooltip, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';
import { ExpenseType } from '@/types/commonTypes';
import ExpenseModal from './expenseModel';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expense, setExpense] = useState<ExpenseType>({
    id: '',
    amount: 0,
    category: '',
    note: '',
    date: ''
  });
  const [total, setTotal] = useState<number>(0)

  const onAddExpense = (expense: ExpenseType) => {
    setExpenses([...expenses, expense]);
    setTotal(total + expense.amount);
  }
  const onClose = () => {
    setIsOpen(false);
  }

  const onUpdateExpense = (expenseRecord: ExpenseType) => {
    setExpenses(expenses.map((e) => (e.id === expenseRecord.id ? expenseRecord : e)));
    setTotal(total - expense.amount + expenseRecord.amount);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }


  const onDeleteHandler = (expense: ExpenseType) => {
    setExpenses(expenses.filter((e) => e.id !== expense.id));
    setTotal(total - expense.amount);
  }

  const onEditHandler = (expense: ExpenseType) => {
    setExpense(expense)
    setIsOpen(true);
  }
  return (
    <div className="mt-8">
      <h2 className="font-serif italic underline text-2xl text-zinc-950 font-semibold ml-4 mb-2">Expense List</h2>
      <button className='float-right border-solid p-2 mr-4 mb-2 bg-gray-800 font-sans text-white rounded-md ' onClick={() => setIsOpen(true)}>Add Expense</button>
      <ExpenseModal expense={expense} isOpen={isOpen} onClose={onClose} onAddExpense={onAddExpense} onUpdateExpense={onUpdateExpense} />
      <table className="min-w-full bg-white border pb-2 border-slate-950">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.length > 0 ?
              expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{expense.id}</td>
                  <td className="py-2 px-4 border-b">PKR{expense.amount.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{expense.category}</td>
                  <td className="py-2 px-4 border-b">{expense.note}</td>
                  <td className="py-2 px-4 border-b">{new Date(expense.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => onEditHandler(expense)} className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                    <button onClick={() => onDeleteHandler(expense)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              ))

              : <tr>
                <td>No Expense Fouund!</td>
              </tr>

          }
        </tbody>
      </table>
      <div className="flex justify-end">
        <p className="text-2xl font-semibold mt-2 mb-4">Total: PKR{total.toFixed(2)}</p>
      </div>
      <div className='flex justify-center text-center mt-3 mb-4'>
      <ResponsiveContainer width={1000} height={600} className='bg-lime-300 rounded-3xl p-3'>
        <BarChart   data={expenses}>
          <Bar barSize={50} fill="#8884d8" dataKey='amount'  />
          <XAxis dataKey='category' />
          <YAxis/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseList;