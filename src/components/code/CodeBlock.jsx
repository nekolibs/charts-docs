import { Highlight, themes } from 'prism-react-renderer'

export default function CodeBlock({ code, language = 'jsx' }) {
  return (
    <Highlight code={code.trim()} language={language} theme={themes.dracula}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            ...style,
            backgroundColor: '#0f0f0f',
            margin: 0,
            padding: '16px',
            borderRadius: '10px',
            overflowX: 'scroll',
            fontSize: '12px',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
