import Material from 'component-material'

const SelectedMaterial = ({ blue = 0.2, ...props }) => {
  return (
    <>
      <Material
        {...props}
        uniforms={{
          r: { value: 0.0, type: 'float' },
          g: { value: 0.0, type: 'float' },
          b: { value: blue, type: 'float' },
        }}
        transparent
      >
        <Material.Frag.Body children={`gl_FragColor = vec4(r, g, b, 0.4);`} />
      </Material>
    </>
  )
}

export default SelectedMaterial
