import PropTypes from "prop-types"

const SectionHeader = ({title}) => {
  return (
    <div className="my-5">
        <h2 className="text-[28px] font-bold p-1">{title}</h2>
        <hr className="border-baseColor border-2"/>
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeader