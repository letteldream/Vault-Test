<div class="markdown prose w-full break-words dark:prose-invert dark">
  <h1>Vault Project</h1>
  <p>
    <a href="https://opensource.org/licenses/MIT" target="_new"
      ><img
        src="https://img.shields.io/badge/license-MIT-blue.svg"
        alt="License"
        data-nsfw-filter-status="sfw"
        style="visibility: visible"
    /></a>
  </p>
  <h2>Overview</h2>
  <p>
    The Vault project is a decentralized smart contract allowing users to
    deposit and withdraw ERC-20 tokens in a secure and controlled manner. It is
    designed to be easy to use by any number of users while providing
    administrators with essential functionalities.
  </p>
  <h2>Features</h2>
  <ul>
    <li>Deposit and withdraw ERC-20 tokens.</li>
    <li>
      Pause and unpause functionality to control new deposits and withdrawals.
    </li>
    <li>Whitelist tokens for added security.</li>
  </ul>
  <h2>Smart Contract Details</h2>
  <p>
    The main smart contract is implemented in <code>contracts/Vault.sol</code>.
    The contract is built using Solidity and is tested using Hardhat with
    TypeScript.
  </p>
  <h2>Getting Started</h2>
  <p>Follow these steps to set up and test the project locally:</p>
  <ol>
    <li>
      <p><strong>Clone the Repository:</strong></p>
      <pre><div class="bg-black rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/letteldream/vault-project.git
  </code></div></div></pre>
    </li>
    <li>
      <p><strong>Install Dependencies:</strong></p>
      <pre><div class="bg-black rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> vault-project
  npm install
  </code></div></div></pre>
    </li>
    <li>
      <p><strong>Compile Contracts:</strong></p>
      <pre><div class="bg-black rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npx hardhat compile
  </code></div></div></pre>
    </li>
    <li>
      <p><strong>Run Tests:</strong></p>
      <pre><div class="bg-black rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npx hardhat <span class="hljs-built_in">test</span>
  </code></div></div></pre>
      <p>Ensure that all tests pass successfully.</p>
    </li>
    <li>
      <p><strong>Deploy Smart Contract:</strong></p>
      <p>
        Modify the deployment script in <code>scripts/deploy.js</code> with your
        deployment parameters, and then run:
      </p>
      <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npx hardhat run scripts/deploy.js
  </code></div></div></pre>
    </li>
    <li>
      <p><strong>Interact with the Contract:</strong></p>
      <p>
        Use the contract address deployed in the previous step to interact with
        the smart contract. Update the <code>Vault</code> address in the test
        script if needed.
      </p>
    </li>
  </ol>
  <h2>Usage</h2>
  <p>
    Provide instructions on how users and administrators can interact with the
    smart contract. Include examples of depositing, withdrawing, pausing, and
    whitelisting tokens.
  </p>
  <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>typescript</span><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-typescript"><span class="hljs-comment">// Example usage in TypeScript test script</span>
  <span class="hljs-keyword">await</span> vault.<span class="hljs-title function_">connect</span>(owner).<span class="hljs-title function_">whitelistToken</span>(token.<span class="hljs-property">address</span>);
  <span class="hljs-keyword">await</span> vault.<span class="hljs-title function_">connect</span>(user).<span class="hljs-title function_">deposit</span>(token.<span class="hljs-property">address</span>, <span class="hljs-title function_">parseEther</span>(<span class="hljs-string">'100'</span>));
  <span class="hljs-keyword">await</span> vault.<span class="hljs-title function_">connect</span>(user).<span class="hljs-title function_">withdraw</span>(token.<span class="hljs-property">address</span>, <span class="hljs-title function_">parseEther</span>(<span class="hljs-string">'50'</span>));
  </code></div></div></pre>

  <h2>Acknowledgments</h2>
  <ul>
    <li>
      <a href="https://openzeppelin.com/" target="_new">OpenZeppelin</a> for
      providing secure and community-audited smart contract libraries.
    </li>
  </ul>
  <h2>Contact</h2>
  <p>
    For inquiries, please contact [<a
      href="mailto:letteldream@gmail.com"
      target="_new"
      >letteldream@gmail.com</a
    >].
  </p>
  <hr />
  <p>
    Feel free to customize this template based on your project's specific
    details. Include additional sections or information that might be relevant
    to your users and contributors.
  </p>
</div>
