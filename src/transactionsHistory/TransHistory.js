import React from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

const shortDate = val => {
    if (!val) return;

    let d = new Date(val);
    if (!isNaN(d.valueOf())) {
        return dateFormat(d, 'mmm. d');
    }
}

// sample
// "amount": "82.02",
// "categoryCode": "#12a580",
// "merchant": "The Tea Lounge",
// "merchantLogo": "",
// "transactionDate": 1476933842000,
// "transactionType": "Card Payment"


// return a transaction history listing
const TransItem = props => {
    let item = props.item;
    return (
        <li className="transItem" data-idx={props.idx}>
            <span className="tCatCode" style={{ backgroundColor: item.categoryCode }}></span>
            <span className="tDate">{shortDate(item.transactionDate)}</span>
            <span>
                <span className="mLogo" style={{ backgroundImage: 'url(' + item.merchantLogo + ')' }}></span>
            </span>
            <span className="tDescript">
                <span className="mName">{item.merchant}</span>
                <span className="tType">{item.transactionType}</span>
            </span>
            <span className="tAmount">{item.amount}</span>
        </li>
    );
}

const TransHistory = (props) => {
    let transItems;
    if (!props.transHistory.length) {
        transItems = <li>No Transactions to Display</li>;
    } else {
        transItems = props.transHistory.map(function (item, idx) {
            return <TransItem
                item={item}
                idx={idx.toString()}
                key={idx.toString()}
                onTransactionsSelect={props.onTransSelect} />;
        }, props);
    }

    return (
        <div className="card">
            <div className="card-header">
                <i className="icon briefcase"></i>
                Recent Transactions
            </div>
            <div className="card-content">
                <ul className="transHstry">{transItems}</ul>
            </div>
        </div>
    );
};

TransHistory.propTypes = {
    // tbc
};

const mapStateToProps = (state) => ({
    transHistory: state.transHistory.transactions
});

const mapDispatchToProps = dispatch => ({
    // we could easily add a historic transaction details re-preview
    onTransSelect: (idx) => {
        dispatch({
            type: 'TRANS_SELECT',
            index: idx
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransHistory);
