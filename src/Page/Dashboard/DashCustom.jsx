import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const category = [
  {
    id: 1,
    name: 'Facebook',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Instagram',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'YouTube',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Linkedin',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Twitter',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Pinterest',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Online SEO',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Design',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'E-mail',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Data',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const facebookService = [
  {
    id: 1,
    name: 'Facebook Business page create and Professionally Set-up = $30',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Facebook page monetization = $250',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Facebook post design = $7',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Facebook banner design = $15',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'facebook ads design = $25',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Facebook Marketing = $40',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Facebook Ads Campaign = $100',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

const instagramService = [
  {
    id: 1,
    name: 'Instagram Hashtags Research = $25',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Instagram Influencer Research = $35',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Instagram post design = $7',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const youtubeService = [
  {
    id: 1,
    name: 'YouTube Thumbnail = $7',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'YouTube Banner = $15',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'YouTube SEO = $10',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'YouTube Channel Create and Professionally Set-up = $30',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'YouTube Monetization = $450',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const linkedinService = [
  {
    id: 1,
    name: 'Linkedin Connections = $55',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Linkedin Business page Creation and Set-up = $65',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Linkedin optimization = $155',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Linkedin ads = $260',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Linkedin Post = $7',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const emailService = [
  {
    id: 1,
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


const DashCustom = () => {
    const [selectedCat, setSelectedCat] = useState(category[0])
  const [selectedSer, setSelectedSer] = useState(null)
    return (
        <div className="my-10 ">
      <div className="grid grid-cols-1 gap-x-6">
        <div>

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
                          selectedCat.name === "Facebook" ? facebookService.map((person) => (
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
                            selectedCat.name === "Instagram" ?
                              instagramService.map((person) => (
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
                              selectedCat.name === "YouTube" ?
                              youtubeService.map((person) => (
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
                                selectedCat.name === "Linkedin" ?
                                linkedinService.map((person) => (
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
                                  selectedCat.name === "Twitter" ?
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

                                    selectedCat.name === "Pinterest" ?
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

      </div>

      {/* Quantity and Charge */}

      <div className='grid grid-cols-2 mt-6 gap-x-6'>
        <div className='flex justify-center items-center'>
          <p className='text-xl font-semibold text-black mr-4'>Quantity:</p>
          <input className='h-14 w-full dashShadow rounded-[10px] bg-white' type="number" name='quantity' />
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-xl font-semibold text-black mr-4'>Charge:</p>
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

export default DashCustom;