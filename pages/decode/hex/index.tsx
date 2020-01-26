import React from "react";

import { parse, Transaction } from "ethers/utils/transaction";
import TxInfo from "../../../components/Transaction";

interface HexDecoderState {
    decodeTx: string;
    decodedTx?: Transaction;
    errorMsg: string;
}

class HexDecoder extends React.Component<{}, HexDecoderState> {
    constructor(props) {
        super(props);
        this.state = {
            decodeTx: "",
            errorMsg: ""
        };
    }

    decodeTx = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        try {
            let decodedTx = parse(e.target.value);
            if (decodedTx) {
                this.setState({
                    decodedTx,
                    errorMsg: ""
                });
            }
            console.log(decodedTx);
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
                this.setState({
                    decodeTx: undefined,
                    errorMsg: e.message
                });
            }
        }
    };

    render = () => {
        const textClass =
            this.state.errorMsg !== ""
                ? "is-invalid form-control"
                : "form-control";
        return (
            <div>
                <div className="form-group">
                    <label html-for="decode-tx">Enter Raw Hex</label>
                    <textarea
                        className={textClass}
                        id="decode-tx"
                        onChange={this.decodeTx}
                        rows={4}
                    />
                    <div className="invalid-feedback">
                        {this.state.errorMsg}
                    </div>
                </div>

                {this.state.decodedTx && (<TxInfo t={this.state.decodedTx} />)}
            </div>
        );
    };
}

export default HexDecoder;
