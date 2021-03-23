import Material from 'component-material'

const SelectedMaterial = (props) => {
  return (
    <>
      <Material
        {...props}
        uniforms={{
          r: { value: 0.0, type: 'float' },
          g: { value: 0.0, type: 'float' },
          b: { value: 0.4, type: 'float' },
        }}
        transparent
      >
        <Material.Frag.Body children={`gl_FragColor = vec4(r, g, b, 0.4);`} />
      </Material>
    </>
  )
}

export default SelectedMaterial
