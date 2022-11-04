const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x, _remove0x } = require('./utils')

const _getIndexOwnedByTheVault = async (signer, savETHVaultAddress) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.indexOwnedByTheVault();
};

const _batchDepositETHForStaking = async (signer, savETHVaultAddress, blsPublicKeys, amounts) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.batchDepositETHForStaking(
        blsPublicKeys,
        amounts
    );
};

module.exports = {
    _getIndexOwnedByTheVault,
    _batchDepositETHForStaking
};
