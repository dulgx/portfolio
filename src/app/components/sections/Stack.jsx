export default function Stack() {
  return (
    <>
      <div className="sect-head">
        <span className="glyph">##</span>
        <h2>
          <span className="dim">04 /</span>{" "}
          <span className="accent">package.json</span>
        </h2>
        <span className="count">20 deps · 0 bloat</span>
      </div>

      <div className="stack-grid">
        <span className="brace">{"{"}</span>
        <span className="indent">
          <span className="key">&quot;name&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;dulguun&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent">
          <span className="key">&quot;role&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;full-stack · erp · frontend&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent">
          <span className="key">&quot;since&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;2023&quot;</span>
          <span className="sep">,</span>
        </span>
        <br />
        <span className="indent">
          <span className="key">&quot;backend&quot;</span>
          <span className="sep">: </span>
          <span className="brace">{"{"}</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;odoo&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;^16.0&quot;</span>
          <span className="sep">, </span>
          <span className="comment">// main ERP</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;python&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;3.x&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;postgresql&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;*&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;xml-rpc&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;*&quot;</span>
        </span>
        <span className="indent">
          <span className="brace">{"}"}</span>
          <span className="sep">,</span>
        </span>
        <br />
        <span className="indent">
          <span className="key">&quot;frontend&quot;</span>
          <span className="sep">: </span>
          <span className="brace">{"{"}</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;next&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;^15.0&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;react&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;^19.0&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;tailwindcss&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;^4.0&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;javascript&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;*&quot;</span>
        </span>
        <span className="indent">
          <span className="brace">{"}"}</span>
          <span className="sep">,</span>
        </span>
        <br />
        <span className="indent">
          <span className="key">&quot;infra&quot;</span>
          <span className="sep">: </span>
          <span className="brace">[</span>
          <span className="str">&quot;git&quot;</span>
          <span className="sep">, </span>
          <span className="str">&quot;gitlab&quot;</span>
          <span className="sep">, </span>
          <span className="str">&quot;azure-devops&quot;</span>
          <span className="sep">, </span>
          <span className="str">&quot;aws&quot;</span>
          <span className="brace">]</span>
          <span className="sep">,</span>
        </span>
        <span className="indent">
          <span className="key">&quot;ops&quot;</span>
          <span className="sep">: </span>
          <span className="brace">[</span>
          <span className="str">&quot;active-directory&quot;</span>
          <span className="sep">, </span>
          <span className="str">&quot;office-365&quot;</span>
          <span className="brace">]</span>
          <span className="sep">,</span>
        </span>
        <br />
        <span className="indent">
          <span className="key">&quot;languages&quot;</span>
          <span className="sep">: </span>
          <span className="brace">{"{"}</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;mn&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;native&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;en&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;professional&quot;</span>
          <span className="sep">,</span>
        </span>
        <span className="indent-2">
          <span className="key">&quot;ja&quot;</span>
          <span className="sep">: </span>
          <span className="str">&quot;JLPT N2&quot;</span>
        </span>
        <span className="indent">
          <span className="brace">{"}"}</span>
        </span>
        <span className="brace">{"}"}</span>
      </div>
    </>
  );
}
