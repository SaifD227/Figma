
'use client'
import React, { useState } from 'react';

const PaginatedTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 8; 

    const transactions = [
        { description: ' Store A', transaction: 'TXN001', id: '123456', type: 'Debit', card: '****1234', date: '2024-10-01', amount: '$50.00' },
        { description: ' Store B', transaction: 'TXN002', id: '654321', type: 'Credit', card: '*** 5678', date: '2024-10-02', amount: '$100.00' },
        { description: ' Store C', transaction: 'TXN003', id: '789012', type: 'Debit', card: '****9012', date: '2024-10-03', amount: '$30.00' },
        { description: ' Store D', transaction: 'TXN004', id: '345678', type: 'Credit', card: '*** 3456', date: '2024-10-04', amount: '$75.00' },
        { description: ' Store E', transaction: 'TXN005', id: '789456', type: 'Debit', card: '****7890', date: '2024-10-05', amount: '$20.00' },
        { description: ' Store F', transaction: 'TXN006', id: '147258', type: 'Credit', card: '*** 1357', date: '2024-10-06', amount: '$60.00' },
        { description: ' Store G', transaction: 'TXN007', id: '258369', type: 'Debit', card: '****2468', date: '2024-10-07', amount: '$90.00' },
        { description: ' Store H', transaction: 'TXN008', id: '369147', type: 'Credit', card: '*** 3579', date: '2024-10-08', amount: '$150.00' },
        { description: ' Store I', transaction: 'TXN009', id: '147852', type: 'Debit', card: '****8642', date: '2024-10-09', amount: '$30.00' },
        { description: ' Store J', transaction: 'TXN010', id: '258741', type: 'Credit', card: '*** 7531', date: '2024-10-10', amount: '$45.00' },
        { description: ' Store K', transaction: 'TXN011', id: '963852', type: 'Debit', card: '****9513', date: '2024-10-11', amount: '$70.00' },
        { description: ' Store L', transaction: 'TXN012', id: '789123', type: 'Credit', card: '*** 1597', date: '2024-10-12', amount: '$25.00' },
        { description: ' Store M', transaction: 'TXN013', id: '456789', type: 'Debit', card: '****2583', date: '2024-10-13', amount: '$80.00' },
        { description: ' Store N', transaction: 'TXN014', id: '321654', type: 'Credit', card: '*** 7539', date: '2024-10-14', amount: '$120.00' },
        { description: ' Store O', transaction: 'TXN015', id: '987654', type: 'Debit', card: '****4561', date: '2024-10-15', amount: '$35.00' },
        { description: ' Store P', transaction: 'TXN016', id: '654987', type: 'Credit', card: '*** 9870', date: '2024-10-16', amount: '$95.00' },
        { description: ' Store Q', transaction: 'TXN017', id: '321789', type: 'Debit', card: '****1239', date: '2024-10-17', amount: '$55.00' },
        { description: ' Store R', transaction: 'TXN018', id: '987123', type: 'Credit', card: '*** 4569', date: '2024-10-18', amount: '$75.00' },
    ];

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Transaction History</h1>
            <div className="overflow-x-auto">  
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-2 px-4 border">Description</th>
                            <th className="py-2 px-4 border">Transaction</th>
                            <th className="py-2 px-4 border">ID</th>
                            <th className="py-2 px-4 border">Type</th>
                            <th className="py-2 px-4 border">Card</th>
                            <th className="py-2 px-4 border">Date</th>
                            <th className="py-2 px-4 border">Amount</th>
                            <th className="py-2 px-4 border">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border">{transaction.description}</td>
                                <td className="py-2 px-4 border">{transaction.transaction}</td>
                                <td className="py-2 px-4 border">{transaction.id}</td>
                                <td className="py-2 px-4 border">{transaction.type}</td>
                                <td className="py-2 px-4 border">{transaction.card}</td>
                                <td className="py-2 px-4 border">{transaction.date}</td>
                                <td className="py-2 px-4 border">{transaction.amount}</td>
                                <td className="py-2 px-4 border">
                                    <button className="bg-blue-500 text-white py-1 px-2 rounded">Download</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 1} 
                    className={`py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                >
                    Prev
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages} 
                    className={`py-2 px-4 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedTable;