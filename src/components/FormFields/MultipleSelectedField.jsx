import React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { array } from 'yup';

const Root = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
  font-size: 14px;
  margin: 30px auto;
  
`
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
  ({ theme }) => `
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  display: flex;
  flex-wrap: wrap;
  background: #FFFFFF;
  border: 1px solid #929395;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 12px;
  margin: 0 auto;

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#FFD333' : '#FFD333'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <CloseIcon style={{ fontSize: '18px' }} onClick={onDelete} />
      <span>{label}</span>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  box-sizing: content-box;
  padding: 2px 12px;
  outline: 0;
  overflow: hidden;
  background: #919EAB;
  border-radius: 2px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #fff;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export function MultipleSelectedField({ onClickMultipleSelect, listCategory }) {
  let objectCategory = [];

  if (listCategory) {
    function setID(item, index) {
      let category = { 'title: ': item };
      return category;
    }

    objectCategory = { ...listCategory.map(setID) };
  }

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'categories',
    defaultValue: [top100Films[0]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  const onInputChange = (values) => {
    onClickMultipleSelect(values);
  };

  return (
    <Root>
      <div {...getRootProps()}>
        {/* <Label {...getInputLabelProps()}>Customized hook</Label> */}
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} onClick={onInputChange(value)} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];
