export { default as Meta } from "./Meta"
export { default as Section } from "./Section"

export const chunkByType = (slices, type) => {
  const final = []
  var group = { slices: [] }
  slices.forEach(slice => {
    if (slice.slice_type === type) {
      final.push(group)
      group = { callout: slice, slices: [] }
      return
    }
    group.slices.push(slice)
  })
  final.push(group)
  return final
}
