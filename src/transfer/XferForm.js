import React from 'react';
import { connect } from 'react-redux';
import { isFinite, toNumber } from 'lodash';

const FieldGroup = ({ id, label, ...props }) => {
  return (
    <div className={"pbInputBloc " + props.className || ''}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

const Prompt = (props) => {
  return props.phase === 'submit' ? <div className="previewPrompt">PREVIEW</div> : null;
}

const XferForm = (props) => {
  let data = props.xferQueue.data;
  let phase = props.xferQueue.phase;
  let canSubmit = !!(data.toAcct && data.amount);
  let action = phase === 'submit' ? props.onXferConfirm : props.onXferSubmit;
  return (
    <div className="card xfer">
      <div className="card-header">
        <i className="icon arrows"></i>
        Make a Transfer
      </div>
      <div className={'card-content ' + phase}>
        <Prompt phase={phase}></Prompt>
        <form>
          <FieldGroup
            id="xferFrom"
            label="From Account"
            type="text"
            disabled="disabled"
            value={data.fromLabel + '$' + (data.balance ? data.balance.toFixed(2) : '0.00')}
            name="fromAcct"
          />
          <FieldGroup
            id="xferTo"
            label="To Account"
            type="text"
            placeholder="Enter receiving account"
            value={data.toAcct || ""}
            name="toAcct"
            onChange={e => {
              e.preventDefault()
              props.onXferValueChange({ name: 'toAcct', value: e.target.value })
            }}
          />
          <FieldGroup
            id="xferAmt"
            label="Amount"
            className="prefix"
            type="text"
            placeholder="0.00"
            value={data.amount || ""}
            name="amount"
            onChange={e => {
              e.preventDefault();
              // enusure numberable
              if (isFinite(toNumber(e.target.value))) {
                let dp = e.target.value.split('').reverse().indexOf('.');
                // constrain the precision
                if (dp < 3) {
                  props.onXferValueChange({ name: 'amount', value: e.target.value });
                }
              }
            }}
          />
          <div className="actions">
            <button className="btn" name="action" type="SUBMIT" disabled={!canSubmit}
              onClick={e => {
                e.preventDefault();
                action({toAcct: data.toAcct, amount: data.amount});
              }}>{phase === 'submit' ? 'TRANSFER' : 'SUBMIT'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

XferForm.propTypes = {

};

const mapStateToProps = (state) => ({
  xferQueue: state.xferQueue
});

const mapDispatchToProps = (dispatch) => ({
  onXferValueChange: (data) => {
    dispatch({
      type: 'XFER_QUEUE',
      data: data
    });
  },
  onXferSubmit: () => {
    dispatch({
      type: 'XFER_SUBMIT'
    });
  },
  onXferConfirm: (data) => {
    dispatch({
      type: 'TRANS_ADD',
      data: data
    });
    dispatch({
      type: 'XFER_XFER'
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XferForm);
