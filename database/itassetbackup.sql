--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Computers; Type: TABLE; Schema: public; Owner: itassetadmin
--

CREATE TABLE public."Computers" (
    id character varying(255) NOT NULL,
    motherboard character varying(255),
    processor character varying(255),
    memory integer,
    harddisk integer,
    os character varying(255),
    user_id character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Computers" OWNER TO itassetadmin;

--
-- Name: Departments; Type: TABLE; Schema: public; Owner: itassetadmin
--

CREATE TABLE public."Departments" (
    id character varying(255) NOT NULL,
    department_head character varying(255),
    department_description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Departments" OWNER TO itassetadmin;

--
-- Name: Projectdepartments; Type: TABLE; Schema: public; Owner: itassetadmin
--

CREATE TABLE public."Projectdepartments" (
    id uuid NOT NULL,
    project_id character varying(255) NOT NULL,
    department_id character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Projectdepartments" OWNER TO itassetadmin;

--
-- Name: Projects; Type: TABLE; Schema: public; Owner: itassetadmin
--

CREATE TABLE public."Projects" (
    id character varying(255) NOT NULL,
    project_head character varying(255),
    project_description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Projects" OWNER TO itassetadmin;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: itassetadmin
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO itassetadmin;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: itassetadmin
--

CREATE TABLE public."Users" (
    id character varying(255) NOT NULL,
    name character varying(255),
    nik character varying(255),
    department_id character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO itassetadmin;

--
-- Data for Name: Computers; Type: TABLE DATA; Schema: public; Owner: itassetadmin
--

COPY public."Computers" (id, motherboard, processor, memory, harddisk, os, user_id, "createdAt", "updatedAt") FROM stdin;
it01-computer	Gigabyte	i7	16	500	Linux Mint	deo.fibrianico	2019-06-01 23:03:06.312+07	2019-06-01 23:03:06.312+07
it02-computer	Gigabyte	i3	4	500	Windows 10	hakim.harahap	2019-06-01 23:04:23.406+07	2019-06-01 23:04:23.406+07
export01-computer	Gigabyte	i3	4	500	Windows 10	yudo.budi	2019-06-01 23:05:12.213+07	2019-06-01 23:05:12.213+07
export02-computer	Gigabyte	i3	4	500	Windows 10	legowo	2019-06-01 23:05:34.218+07	2019-06-01 23:05:34.218+07
hrd01-computer	Gigabyte	i3	4	500	Windows 10	luthfi.hakim	2019-06-01 23:06:14.646+07	2019-06-01 23:06:14.646+07
\.


--
-- Data for Name: Departments; Type: TABLE DATA; Schema: public; Owner: itassetadmin
--

COPY public."Departments" (id, department_head, department_description, "createdAt", "updatedAt") FROM stdin;
IT	deo.fibrianico	Handle IT Structure	2019-06-01 20:36:03.712+07	2019-06-01 20:36:03.712+07
EXPORT	yudo.budi	Handle Export Item	2019-06-01 22:52:48.716+07	2019-06-01 22:52:48.716+07
HRD	luthfi.hakim	Handle HRD Recruitment	2019-06-01 22:53:21.536+07	2019-06-01 22:53:21.536+07
\.


--
-- Data for Name: Projectdepartments; Type: TABLE DATA; Schema: public; Owner: itassetadmin
--

COPY public."Projectdepartments" (id, project_id, department_id, "createdAt", "updatedAt") FROM stdin;
0085b471-2ce7-49da-8e3d-1123de9ca13c	AUDIT	IT	2019-06-01 23:09:03.562+07	2019-06-01 23:09:03.562+07
e5a859eb-aefe-4278-8b6e-99fb20f89e6c	AUDIT	HRD	2019-06-01 23:09:10.321+07	2019-06-01 23:09:10.321+07
\.


--
-- Data for Name: Projects; Type: TABLE DATA; Schema: public; Owner: itassetadmin
--

COPY public."Projects" (id, project_head, project_description, "createdAt", "updatedAt") FROM stdin;
AUDIT	deo.fibrianico	Collaboration IT and HRD for Audit Internal	2019-06-01 23:07:53.605+07	2019-06-01 23:07:53.605+07
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: itassetadmin
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190525051048-create-projectdepartment.js
20190525051344-create-computer.js
20190525051504-create-user.js
20190525051517-create-department.js
20190525051531-create-project.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: itassetadmin
--

COPY public."Users" (id, name, nik, department_id, "createdAt", "updatedAt") FROM stdin;
deo.fibrianico	Deo Fibrianico	2019it01	IT	2019-06-01 22:55:58.789+07	2019-06-01 22:55:58.789+07
hakim.harahap	Hakim Luthfi Harahap	2019it02	IT	2019-06-01 22:56:19.541+07	2019-06-01 22:56:19.541+07
yudo.budi	Yudo Saputro Budi	2019export01	EXPORT	2019-06-01 22:56:50.85+07	2019-06-01 22:56:50.85+07
legowo	Legowo	2019export02	EXPORT	2019-06-01 22:57:15.481+07	2019-06-01 22:57:15.481+07
luthfi.hakim	Luthfi Sandy Hakim	2019hrd01	HRD	2019-06-01 22:57:59.667+07	2019-06-01 22:57:59.667+07
\.


--
-- Name: Computers Computers_pkey; Type: CONSTRAINT; Schema: public; Owner: itassetadmin
--

ALTER TABLE ONLY public."Computers"
    ADD CONSTRAINT "Computers_pkey" PRIMARY KEY (id);


--
-- Name: Departments Departments_pkey; Type: CONSTRAINT; Schema: public; Owner: itassetadmin
--

ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT "Departments_pkey" PRIMARY KEY (id);


--
-- Name: Projectdepartments Projectdepartments_pkey; Type: CONSTRAINT; Schema: public; Owner: itassetadmin
--

ALTER TABLE ONLY public."Projectdepartments"
    ADD CONSTRAINT "Projectdepartments_pkey" PRIMARY KEY (id);


--
-- Name: Projects Projects_pkey; Type: CONSTRAINT; Schema: public; Owner: itassetadmin
--

ALTER TABLE ONLY public."Projects"
    ADD CONSTRAINT "Projects_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: itassetadmin
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: itassetadmin
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

