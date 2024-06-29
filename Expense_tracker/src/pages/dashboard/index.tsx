// pages/dashboard/index.tsx

import React, { useMemo } from 'react';
import { useUser } from '@clerk/clerk-react';
import { FinancialRecordForm } from './financial-record-form';
import { FinancialRecordList } from './financial-record-list';
import { useFinancialRecords } from '../../context/financial-record-context';

export const Dashboard: React.FC = () => {
    const { user } = useUser();
    const { records } = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount += record.amount;
        });
        return totalAmount;
    }, [records]);

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Welcome {user?.firstName}! Here are your Expenses:</h1>

            </div>
            <FinancialRecordForm />
            <br/>
            <div style={{ fontWeight: 'bolder' }}>Total Monthly: ₹{totalMonthly.toFixed(2)}</div>

            <FinancialRecordList />
        </div>
    );
};
