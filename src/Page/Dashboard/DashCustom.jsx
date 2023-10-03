import { Fragment, useContext, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { AuthContext } from '../../Provider/AuthProvider'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const category = [
  {
    id: 0,
    price: 350,
    name: 'Please Select',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
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
    price: 30,
    name: 'Facebook Business page create and Professionally Set-up',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 250,
    name: 'Facebook page monetization',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 7,
    name: 'Facebook post design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 15,
    name: 'Facebook banner design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 25,
    name: 'facebook ads design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 40,
    name: 'Facebook Marketing',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    price: 100,
    name: 'Facebook Ads Campaign',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

const instagramService = [
  {
    id: 1,
    price: 35,
    name: 'Instagram Hashtags Research',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 35,
    name: 'Instagram Influencer Research',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 7,
    name: 'Instagram post design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const youtubeService = [
  {
    id: 1,
    price: 7,
    name: 'YouTube Thumbnail ',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 15,
    name: 'YouTube Banner ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 10,
    name: 'YouTube SEO ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 30,
    name: 'YouTube Channel Create and Professionally Set-up ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 450,
    name: 'YouTube Monetization ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const linkedinService = [
  {
    id: 1,
    price: 55,
    name: 'Linkedin Connections ',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 65,
    name: 'Linkedin Business page Creation and Set-up ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 155,
    name: 'Linkedin optimization ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 260,
    name: 'Linkedin ads 0',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 7,
    name: 'Linkedin Post ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const twitterService = [
  {
    id: 1,
    price: 40,
    name: 'Twitter Marketing ',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 450,
    name: 'Twitter impressions 0',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 15,
    name: 'Twitter banner ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]
const pinterestService = [
  {
    id: 1,
    price: 150,
    name: 'Pinterest Marketing 0',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 375,
    name: 'Pinterest paid ads 5',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 320,
    name: 'Pinterest affiliate marketing 0',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 40,
    name: 'Pinterest virtual assistant ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 40,
    name: 'Pinterest pins ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 60,
    name: 'Pinterest pin creation =  $60',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const seoService = [
  {
    id: 1,
    price: 255,
    name: 'On page SEO 5',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 220,
    name: 'Google maps SEO 0',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 15,
    name: 'YouTube SEO ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 195,
    name: 'Website SEO 5',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 795,
    name: 'Shopify SEO 5',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 210,
    name: 'Google SEO 0',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    price: 255,
    name: 'SEO Audit 5',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }]

const designService = [
  {
    id: 1,
    price: 25,
    name: 'Logo Design ',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 19,
    name: 'Branding ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 22,
    name: 'T-shirt Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 20,
    name: 'Brochure Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 15,
    name: 'Business Cards ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 20,
    name: 'Flyer Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    price: 20,
    name: 'Letterheads',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    price: 20,
    name: 'Leaflets',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    price: 30,
    name: 'Banner Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    price: 25,
    name: 'Digital Painting ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 11,
    price: 19,
    name: 'Poster Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 12,
    price: 15,
    name: 'Icon Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 13,
    price: 20,
    name: 'Illustration',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 14,
    price: 22,
    name: 'CV Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 15,
    price: 13,
    name: 'ID Card Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 16,
    price: 20,
    name: 'Postcard Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 17,
    price: 20,
    name: 'Catalog Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 18,
    price: 15,
    name: 'Social Media Ads ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 19,
    price: 22,
    name: 'Book Cover Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 20,
    price: 20,
    name: 'Invoice Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 21,
    price: 20,
    name: 'Capability Statement Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 22,
    price: 20,
    name: 'Stationery Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 23,
    price: 20,
    name: 'Door Hanger Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 24,
    price: 20,
    name: 'Email Signature Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 25,
    price: 20,
    name: 'Architecture Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 26,
    price: 25,
    name: 'Menu Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 27,
    price: 20,
    name: 'Vector Work',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 28,
    price: 20,
    name: 'Fashion Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 29,
    price: 19,
    name: 'Package Design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 30,
    price: 20,
    name: 'Blog Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 31,
    price: 20,
    name: 'Typography Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 32,
    price: 20,
    name: 'Phone Cover Case Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 33,
    price: 7,
    name: 'Youtube Thumbnail',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 34,
    price: 20,
    name: 'Clipping Path',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 35,
    price: 8,
    name: 'Background Removes',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 36,
    price: 20,
    name: 'photo retouching',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 37,
    price: 12,
    name: 'Photo Manipulation ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 38,
    price: 20,
    name: 'Beauty retouching',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 39,
    price: 15,
    name: 'Facebook cover ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 40,
    price: 35,
    name: 'web banner ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 41,
    price: 20,
    name: 'Roll-up Banner',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 42,
    price: 20,
    name: 'Bill Board Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 43,
    price: 7,
    name: 'Social Media Posts',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 44,
    price: 20,
    name: 'Pattern Design',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 45,
    price: 20,
    name: 'Fluid Background',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const emailService = [
  {
    id: 1,
    price: 100,
    name: 'Email marketing 0',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 55,
    name: 'Malichimp email template design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 45,
    name: 'Send bulk emails ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 55,
    name: 'Bulk email collection ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 55,
    name: 'Bulk email list ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 55,
    name: 'Email template design ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 55,
    name: 'Mailchimp email campaign ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }]
const dataService = [
  {
    id: 1,
    price: 82,
    name: 'Data entry ',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    price: 150,
    name: 'Email collect 0',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    price: 115,
    name: 'Data entry copy past 5',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    price: 85,
    name: 'Data scraping ',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    price: 115,
    name: 'Excel data cleaning 5',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    price: 115,
    name: 'Data analyst =  $115',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const DashCustom = () => {
  const {user} = useContext(AuthContext)
 const email = user?.email
  const navigate = useNavigate()
    const [selectedCat, setSelectedCat] = useState(category[0])
  const [selectedSer, setSelectedSer] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [infor, setInfor] = useState("")
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  const handleQuantity = () => {
    return setQuantity(quantity + 1)
  }

  const handleQuantityMinus = () =>{
    if(quantity > 0){
      return setQuantity(quantity - 1)
    }
    return alert("Quantity is 0")
    
  }
 
  const handleInfo = (e) => {
    setInfor(e.target.value)
  }
  const charge = quantity * selectedSer?.price;

  const handleSubmit = () => {
    const status = "Pending";
    const info = { date, infor, selectedCat, selectedSer, quantity, charge, email, status }
    if(quantity > 0 && selectedCat !== null && selectedSer !== null && infor !== ""){
      axios.post("https://associative-upliftment-server.vercel.app/orders", info)
      .then(res => {
        console.log(res)
        if (res.data.insertedId) {
          Swal.fire(
            'Please Wait for the Approval',
            'Success'
          )
          navigate('/')
        }
      })
    }
    Swal.fire(
      'Please Select All the requirement',
      'Failed'
    )
    
  }
    return (
      <div className="my-4 lg:w-[708px] mx-auto">
      <div className="grid grid-cols-1 gap-x-6">
        <div>
          {/* Category Field */}
          <p className="block font-bold leading-6 text-black lg:text-2xl my-4 pl-4 font-red">Category</p>
          
          <div className="bg-[#D9D9D9] dashShadow rounded-[10px] py-2">
            <Listbox value={selectedCat} onChange={setSelectedCat}>
              {({ open }) => (
                <>
                  {/* <Listbox.Label className="block font-bold leading-6 text-black text-2xl pt-4 pl-4">Category</Listbox.Label> */}
                  <div className="relative mt-2 rounded-[10px]">
                    <Listbox.Button className="relative w-full cursor-default  bg-[#D9D9D9] py-1.5 pl-3 pr-10 text-left text-gray-900 sm:text-sm sm:leading-6 rounded-[10px]">
                      <span className="flex items-center">
                        <span className="ml-3 lg:text-[10px] text-[12px] block font-red truncate">{selectedCat?.name ? selectedCat?.name : "Please Select"}</span>
                      </span>
                      
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 font-red mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#D9D9D9] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {category.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-[#3186EC] text-black font-red' : 'text-gray-900 font-red',
                                'relative cursor-default select-none font-red py-2 pl-3 pr-9'
                              )
                            }
                            value={person}
                          >
                            {({ selectedCat, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(selectedCat ? 'font-semibold font-red' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selectedCat ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-black' : 'text-[#3186EC] font-red',
                                      'absolute inset-y-0 right-0 font-red flex items-center pr-4'
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

          <p className="block font-bold leading-6 text-black lg:text-2xl my-4 pl-4 font-red">Service</p>
          <div className="bg-[#D9D9D9] dashShadow rounded-[10px] py-2">
            <Listbox value={selectedSer} onChange={setSelectedSer}>
              {({ open }) => (
                <>
                  {/* <Listbox.Label className="block font-bold leading-6 text-black text-2xl pt-4 pl-4">Service</Listbox.Label> */}
                  <div className="relative mt-2 rounded-[10px]">
                    <Listbox.Button className="relative w-full cursor-default font-red  bg-[#D9D9D9] py-1.5 pl-3 pr-10 text-left text-gray-900 sm:text-sm sm:leading-6 rounded-[10px]">
                      <span className="flex items-center">
                        <span className="ml-3 lg:text-[10px] text-[12px] block font-red truncate">{selectedSer?.name ? selectedSer?.name : "Please Select"}</span>
                      </span>
                      
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 font-red mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#D9D9D9] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {
                          selectedCat.name === "Facebook" ? facebookService.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active ? 'bg-[#3186EC] text-black font-red' : 'text-gray-900 font-red',
                                  'relative cursor-default select-none font-red py-2 pl-3 pr-9'
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
                                  twitterService.map((person) => (
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
                                    pinterestService.map((person) => (
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
                                      selectedCat.name === "Online SEO" ?
                                      seoService.map((person) => (
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
                                      selectedCat.name === "Design" ?
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
                                      selectedCat.name === "Data" ?
                                      dataService.map((person) => (
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
                                      selectedCat.name === "E-mail" ?
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
                                    <>Please Select Category</>
                        }
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>


          {/* Description Field */}
          <p className='font-bold leading-6 font-red text-black lg:text-2xl pt-4 pl-4'>
              Description
          </p>
          <div className='bg-[#D9D9D9] font-red lg:mt-4 dashShadow rounded-[10px]'>
            

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
          <p className='font-bold leading-6 font-red text-black lg:text-2xl pt-4 pl-4'>
              Information
          </p>
          <div className='bg-[#D9D9D9] lg:mt-4 dashShadow rounded-[10px]'>
            <textarea onChange={handleInfo} className="textarea textarea-ghost font-red  h-64 focus:border-none w-full" placeholder="Information"></textarea>
          </div>
        </div>

      </div>

      {/* Quantity and Charge */}

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 gap-x-6 gap-y-6 lg:gap-y-0'>
        <div className='lg:flex items-center'>
          <p className='text-xl font-semibold font-red text-black lg:mb-0 mb-2 mr-4'>Quantity:</p>
          <div onClick={handleQuantityMinus} className='bg-white border border-gray-500 rounded-full w-10 flex items-center justify-center text-4xl cursor-pointer'>-</div>
          <div className='text-2xl mx-2'>{quantity}</div>
          <div onClick={handleQuantity} className='bg-white border border-gray-500 rounded-full w-10 flex items-center justify-center text-4xl cursor-pointer'>+</div>
        </div>
        <div className='lg:flex justify-center items-center'>
          <p className='text-xl font-semibold text-black mr-4 lg:mb-0 mb-2 font-red'>Charge: </p>
          <div className='h-14 w-full dashShadow rounded-[10px] font-red bg-[#D9D9D9] flex items-center' >
            <p className='pl-4'>
              ${isNaN(charge) ? 0 : charge}
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>

      {/* Submit Button */}
          <div onClick={handleSubmit} className="text-2xl font-semibold cursor-pointer bg-[#3186EC] text-white rounded-[10px] text-center py-4 w-[230px] mx-auto my-6">Submit</div>
    </div>
    );
};

export default DashCustom;