import React from "react";
import { Transaction, populateTransaction } from "ethers/utils/transaction";
import { BigNumber } from "ethers/utils/bignumber";

const TxInfo: React.FC<{
    t: Transaction;
}> = ({ t }) => (
    <>
        <div>
            {Object.keys(t).map((k, i) => (
                <IfExists t={t} k={k} key={i} />
            ))}
        </div>
    </>
);

interface IfExistsProps {
    t: Transaction;
    k: string;
}

const IfExists: React.FC<IfExistsProps> = ({ t, k }) => {
    if (!t[k]) {
        return null;
    }

    let v = t[k];
    if (t[k] instanceof BigNumber) {
        v = t[k].toString();
    }

    return (
        <div>
            {k}: {v}
        </div>
    );
};

export default TxInfo;
