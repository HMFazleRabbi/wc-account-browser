import React from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
} from 'wagmi';

import './Profile.css'; // Import CSS file for styling (create this file separately)

export function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async (connector) => {
    try {
      await connect({ connector });
    } catch (error) {
      console.error('Connection failed:', error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="card">
        {isConnected ? (
          <>
            <div className="avatar-placeholder">
              <span className="avatar-initials">{ensName ? ensName.charAt(0) : address.charAt(0)}</span>
            </div>
            <div className="info">
              {ensName ? (
                <div className="name">{ensName}</div>
              ) : (
                <div className="address">{address}</div>
              )}
              <div className="connected-to">{`Connected to ${connector.name}`}</div>
              <button className="disconnect-btn" onClick={disconnect}>
                Disconnect
              </button>
            </div>
          </>
        ) : (
          <div className="card-content">
            <div className="connectors-container">
              <div className="connect-text">Connect using:</div>
              <div className="connector-buttons">
                {connectors.map((connector) => (
                  <button
                    key={connector.id}
                    onClick={() => handleConnect(connector)}
                    className={`connector-btn ${!connector.ready ? 'unsupported' : ''}`}
                    disabled={!connector.ready}
                  >
                    {connector.name}
                  </button>
                ))}
              </div>
            </div>
            {error && (
              <div className="error-message">
                <p>Connection failed. Please try again.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
