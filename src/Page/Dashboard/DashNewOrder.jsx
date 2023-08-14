import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const category = [
  {
    id: 1,
    price: 350,
    name: 'Business Management',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Digital Marketing',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Web Design and Develop',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Graphic design',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'E-mail Marketing',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Video Editing',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const manageService = [
  {
    id: 1,
    price: 350,
    name: 'A team management your business for $750 a week',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'A team management your business for $2650 a month',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const marketingService = [
  {
    id: 1,
    price: 350,
    name: 'A team management your All Social Media for $350 a week',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'A team management your business for $1400 a month',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const developService = [
  {
    id: 1,
    price: 350,
    name: 'A team management your business website for $350 a week',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'A team management your business website for $1400 a month',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const designService = [
  {
    id: 1,
    price: 350,
    name: 'A team management your all business design for $350 a week',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'A team management your business design for $1400 a month',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const emailService = [
  {
    id: 1,
    price: 350,
    name: 'A team management your e-mail marketing for $350 a week',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'A team management your e-mail marketing for $1400 a month',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const videoService = [
  {
    id: 1,
    price: 350,
    name: 'A team management your all social media ads video editing for $350 a week',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'A team management your all social media ads video editing for $1400 a month',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DashNewOrder = () => {
  const [selectedCat, setSelectedCat] = useState(category[0])
  const [selectedSer, setSelectedSer] = useState(null)
  const [team, setTeam] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleChange = (e) => {
    setTeam(e.target.value);
  };

  const handleQuantity =(e) =>{
    setQuantity(e.target.value);
  }
const charge = quantity * selectedSer?.price; 
  return (
    <div className="my-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
        <div className="col-span-2">

          {/* Category Field */}
          <div className="bg-white dashShadow rounded-[10px]">
            <Listbox value={selectedCat} onChange={setSelectedCat}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block font-bold leading-6 text-black text-2xl pt-4 pl-4">Category</Listbox.Label>
                  <div className="relative mt-2 rounded-[10px]">
                    <Listbox.Button className="relative w-full cursor-default  bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 sm:text-sm sm:leading-6 rounded-[10px]">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">{selectedCat.name}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {category.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={person}
                          >
                            {({ selectedCat, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(selectedCat ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selectedCat ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-black' : 'text-[#FFE500]',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>


          {/* Service Field */}


          <div className="bg-white mt-6 dashShadow rounded-[10px]">
            <Listbox value={selectedSer} onChange={setSelectedSer}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block font-bold leading-6 text-black text-2xl pt-4 pl-4">Service</Listbox.Label>
                  <div className="relative mt-2 rounded-[10px]">
                    <Listbox.Button className="relative w-full cursor-default  bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 sm:text-sm sm:leading-6 rounded-[10px]">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">{selectedSer?.name ? selectedSer?.name : "Please Select"}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {
                          selectedCat.name === "Business Management" ? manageService.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                              }
                              value={person}
                            >
                              {({ selectedCat, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(selectedCat ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                    >
                                      {person.name}
                                    </span>
                                  </div>

                                  {selectedCat ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-black' : 'text-[#FFE500]',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          )) :
                            selectedCat.name === "Digital Marketing" ?
                              marketingService.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selectedSer, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        <span
                                          className={classNames(selectedSer ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                          {person.name}
                                        </span>
                                      </div>

                                      {selectedCat ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-black' : 'text-[#FFE500]',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))
                              :
                              selectedCat.name === "Web Design and Develop" ?
                                developService.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selectedCat, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classNames(selectedSer ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                          >
                                            {person.name}
                                          </span>
                                        </div>

                                        {selectedCat ? (
                                          <span
                                            className={classNames(
                                              active ? 'text-black' : 'text-[#FFE500]',
                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                          >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))
                                :
                                selectedCat.name === "Graphic design" ?
                                  designService.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                          'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selectedSer, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <span
                                              className={classNames(selectedSer ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selectedCat ? (
                                            <span
                                              className={classNames(
                                                active ? 'text-black' : 'text-[#FFE500]',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                              )}
                                            >
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))
                                  :
                                  selectedCat.name === "E-mail Marketing" ?
                                    emailService.map((person) => (
                                      <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                          classNames(
                                            active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                          )
                                        }
                                        value={person}
                                      >
                                        {({ selectedSer, active }) => (
                                          <>
                                            <div className="flex items-center">
                                              <span
                                                className={classNames(selectedSer ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                              >
                                                {person.name}
                                              </span>
                                            </div>

                                            {selectedCat ? (
                                              <span
                                                className={classNames(
                                                  active ? 'text-black' : 'text-[#FFE500]',
                                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                              >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))
                                    :

                                    selectedCat.name === "Video Editing" ?
                                      videoService.map((person) => (
                                        <Listbox.Option
                                          key={person.id}
                                          className={({ active }) =>
                                            classNames(
                                              active ? 'bg-[#FFE500] text-black' : 'text-gray-900',
                                              'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                          }
                                          value={person}
                                        >
                                          {({ selectedSer, active }) => (
                                            <>
                                              <div className="flex items-center">
                                                <span
                                                  className={classNames(selectedSer ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                >
                                                  {person.name}
                                                </span>
                                              </div>

                                              {selectedCat ? (
                                                <span
                                                  className={classNames(
                                                    active ? 'text-black' : 'text-[#FFE500]',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                  )}
                                                >
                                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))
                                      :
                                      alert("Please Select")

                        }
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>


          {/* Description Field */}
          <div className='bg-white mt-6 dashShadow rounded-[10px]'>
            <p className='font-bold leading-6 text-black text-2xl pt-4 pl-4'>
              Description
            </p>

            <p className='pt-4 pb-2 pl-4'>
              🔘 𝐒𝐭𝐚𝐫𝐭: 1-24 Hours
            </p>
            <p className='py-2 pl-4'>🔘 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐢𝐦𝐞: 24-48 Hours

            </p>
            <p className='py-2 pl-4'>
              🔘 𝐐𝐮𝐚𝐥𝐢𝐭𝐲: High Quality

            </p>

            <p className='py-2 px-4'>🔔 Tell us a little about your order in the information box below and
              Share some important links

            </p>
          </div>
          <div className='bg-white mt-6 dashShadow rounded-[10px]'>
            <p className='font-bold leading-6 text-black text-2xl pt-4 pl-4'>Information</p>
            <textarea className="textarea textarea-ghost  h-64 mt-4 focus:border-none w-full" placeholder="Information"></textarea>
          </div>
        </div>

        {/* Team field */}
        <div className='dashShadow rounded-[10px] mt-6 lg:mt-0 bg-white'>
          <p className='font-bold leading-6 text-black text-2xl pt-4 pl-4'>Select Team</p>
          {/* 1st Team */}
          <div className="form-control flex items-center flex-row mt-12 ml-4">
            <div className="flex gap-x-4 justify-center items-center">
              <input
                type="radio"
                name="radio-10"
                value="Strategy Stars Team"
                className="radio checked:bg-black-500"
                onChange={handleChange}
              />
              <img className='w-14 object-cover rounded-full' src="https://i.ibb.co/Hr8wSJK/Whats-App-Image-2023-07-31-at-00-26-32.jpg" alt="" />
              <p className="label-text text-xl font-semibold">Strategy Stars Team</p>
            </div>
          </div>
          {/* 2nd Team */}
          <div className="form-control flex items-center flex-row mt-12 ml-4">
            <div className="flex gap-x-4 justify-center items-center">
              <input
                type="radio"
                name="radio-10"
                value="Dynamic Squad Team"
                className="radio checked:bg-black-500"
                onChange={handleChange}
              />
              <img className='w-14 object-cover rounded-full' src="https://i.ibb.co/z4SKbDZ/Whats-App-Image-2023-07-31-at-00-21-00.jpg" alt="" />
              <p className="label-text text-xl font-semibold">Dynamic Squad Team</p>
            </div>
          </div>
          {/* 3rd */}
          <div className="form-control flex items-center flex-row mt-12 ml-4">
            <div className="flex gap-x-4 justify-center items-center">
              <input
                type="radio"
                name="radio-10"
                value="Galaxy Gliders Team"
                className="radio checked:bg-black-500"
                onChange={handleChange}
              />
              <img className='w-14 object-cover rounded-full' src="https://i.ibb.co/kcH9ntK/Whats-App-Image-2023-07-31-at-00-28-59.jpg" alt="" />
              <p className="label-text text-xl font-semibold">Galaxy Gliders Team</p>
            </div>
          </div>
          {/* 4th Team */}
          <div className="form-control flex items-center flex-row mt-12 ml-4">
            <div className="flex gap-x-4 justify-center items-center">
              <input
                type="radio"
                name="radio-10"
                value="Titans Alliance Team"
                className="radio checked:bg-black-500"
                onChange={handleChange}
              />
              <img className='w-14 object-cover rounded-full' src="https://i.ibb.co/0cJwXHp/Whats-App-Image-2023-07-31-at-00-23-41.jpg" alt="" />
              <p className="label-text text-xl font-semibold">Titans Alliance Team</p>
            </div>
          </div>
          {/* 5th Team */}
          <div className="form-control flex items-center flex-row mt-12 ml-4">
            <div className="flex gap-x-4 justify-center items-center">
              <input
                type="radio"
                name="radio-10"
                value="Dragon Squad Team"
                className="radio checked:bg-black-500"
                onChange={handleChange}
              />
              <img className='w-14 object-cover rounded-full' src="https://i.ibb.co/svJgchW/Whats-App-Image-2023-07-31-at-00-33-33.jpg" alt="" />
              <p className="label-text text-xl font-semibold">Dragon Squad Team</p>
            </div>
          </div>
          {/* 6th Team */}
          <div className="form-control flex items-center flex-row mt-12 ml-4 pb-4">
            <div className="flex gap-x-4 justify-center items-center">
              <input
                type="radio"
                name="radio-10"
                value="Galactic Guardians Team"
                className="radio checked:bg-black-500"
                onChange={handleChange}
              />
              <img className='w-14  object-cover rounded-full' src="https://i.ibb.co/sKMJXX4/Whats-App-Image-2023-07-31-at-00-35-34.jpg" alt="" />
              <p className="label-text text-xl font-semibold">Galactic Guardians Team</p>
            </div>
          </div>








        </div>
      </div>

      {/* Quantity and Charge */}

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 gap-x-6 gap-y-6 lg:gap-y-0'>
        <div className='flex justify-center items-center'>
          <p className='text-xl font-semibold text-black mr-4'>Quantity:</p>
          <input onChange={handleQuantity} className='h-14 w-full dashShadow rounded-[10px] bg-white' type="number" name='quantity' />
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-xl font-semibold text-black mr-4'>Charge: ${charge}</p>
          <input className='h-14 w-full dashShadow rounded-[10px] bg-white' type="number" name='quantity' />
        </div>
        <div>
        </div>
      </div>

      {/* Submit Button */}
          <div className="text-2xl font-semibold bg-[#FFE500] rounded-[10px] text-center py-4 w-[230px] mx-auto my-6">Submit</div>
    </div>
  );
};

export default DashNewOrder;
