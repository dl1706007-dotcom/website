import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Globe, 
  ShieldCheck, 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  Check, 
  Copy, 
  FileText, 
  ChevronRight, 
  TrendingUp,
  Info,
  X,
  BookMarked,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INFOGRAPHIC_BASE64 } from './FileManagement';

/*
const INFOGRAPHIC_BASE64_OLD = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDY4MCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CiAgPCEtLSBEZWZpbml0aW9ucyBmb3IgR3JhZGllbnRzIGFuZCBGaWx0ZXJzIC0tPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiZy1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyMGIxOCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwNTE2MmUiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAyMGQyMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImhlYWRlci1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDRkNjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMDA2NjdhIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDRkNjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJjYXJkLWdyYWQtbGlnaHQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2UxZjdmNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2FyZC1ncmFkLWRhcmsiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA5MzE0NSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDQxYTI2IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWNjZW50LXRlYWwiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMmRkNGJmIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZDk0ODgiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJjaXJjbGUtZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMGQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMTVlNTkiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic2hhZG93IiB4PSItNSUiIHk9Ii01JSIgd2lkdGg9IjExMCUiIGhlaWdodD0iMTEwJSI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI4IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDAwMDAwIiBmbG9vZC1vcGFjaXR5PSIwLjUiLz4KICAgIDwvZmlsdGVyPgogICAgPGZpbHRlciBpZD0iZ2xvdy10ZWFsIiB4PSItMTAlIiB5PSItMTAlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxMjAlIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIgcmVzdWx0PSJibHVyIiAvPgogICAgICA8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iYmx1ciIgb3BlcmF0b3I9Im92ZXIiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDwhLS0gQmFja2dyb3VuZCAtLT4KICA8cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2ODAiIGZpbGw9InVybCgjYmctZ3JhZCkiIC8+CiAgCiAgPCEtLSBTdWJ0bGUgR3JpZCBQYXR0ZXJuIC0tPgogIDxnIG9wYWNpdHk9IjAuMDUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgIDxwYXRoIGQ9Ik0gMCw1MCBMIDEyMDAsNTAgTSAwLDEwMCBMIDEyMDAsMTAwIE0gMCwxNTAgTCAxMjAwLDE1MCBNIDAsMjAwIEwgMTIwMCwyMDAgTSAwLDI1MCBMIDEyMDAsMjUwIE0gMCwzMDAgTCAxMjAwLDMwMCBNIDAsMzUwIEwgMTIwMCwzYTAgTSAwLDQwMCBMIDEyMDAsNDAwIE0gMCw0NTAgTCAxMjAwLDQ1MCBNIDAsNTAwIEwgMTIwMCw1MDAgTSAwLDU1MCBMIDEyMDAsNTUwIE0gMCw2MDAgTCAxMjAwLDYwMCBNIDAsNjUwIEwgMTIwMCw2NTAiIC8+CiAgICA8cGF0aCBkPSJNIDEwMCwwIEwgMTAwLDY4MCBNIDIwMCwwIEwgMjAwLDY4MCBNIDMwMCwwIEwgMzAwLDY4MCBNIDQwMCwwIEwgNDAwLDY4MCBNIDUwMCwwIEwgNTAwLDY4MCBNIDYwMCwwIEwgNjAwLDY4MCBNIDcwMCwwIEwgNzAwLDY4MCBNIDgwMCwwIEwgODAwLDY4MCBNIDkwMCwwIEwgOTAwLDY4MCBNIDEwMDAsMCBMIDEwMDAsNjgwIE0gMTEwMCwwIEwgMTEwMCw2ODAiIC8+CiAgPC9nPgoKICA8IS0tIFRpdGxlIFNlY3Rpb24gLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNDAiIHk9IjI1IiB3aWR0aD0iMTEyMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgZmlsbD0idXJsKCNoZWFkZXItZ3JhZCkiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iNjAwIiB5PSI2NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyNCIgbGV0dGVyLXNwYWNpbmc9IjAuNSI+QsOBTyBDw4FPIE5HSEnDik4gQ+G7qFU6IEzhuqBNIFBIw4FUIFbDgCBDw4FDIFnhur5VIFThu5Ag4bqiTkggSMav4bueTkcgVOG6oEkgVknhu4ZUIE5BTTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYwMCIgeT0iOTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyZGQ0YmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSI0Ij5Uw5NNIFThuq5UIENIw41OSCBD4buQVCBMw5VJPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBDb25uZWN0aXZlIExpbmVzIC0tPgogIDxwYXRoIGQ9Ik0gNjAwLDEyNSBMIDYwMCwxNjUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjciIC8+CiAgPHBhdGggZD0iTSAxOTAsMTY1IEwgMTAxMCwxNjUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjciIC8+CiAgPHBhdGggZD0iTSAxOTAsMTY1IEwgMTkwLDE5NSBNIDQ2MywxNjUgTCA0NjMsMTk1IE0gNzM3LDE2NSBMIDczNywxOTUgTSAxMDEwLDE2NSBMIDEwMTAsMTk1IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC43IiAvPgoKICA8IS0tIENPTFVNTiBJIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1LCAxOTUpIiBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8cmVjdCB4PSIwIiB5PSIxNSIgd2lkdGg9IjI2MCIgaGVpZ2h0PSI0MjUiIHJ4PSIxOCIgZmlsbD0idXJsKCNjYXJkLWdyYWQtbGlnaHQpIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZT0iMS41IiAvPgogICAgPGNpcmNsZSBjeD0iMTMwIiBjeT0iMTUiIHI9IjI4IiBmaWxsPSIjMDQxYTI2IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZT0iMyIgLz4KICAgIDxjaXJjbGUgY3g9IjEzMCIgY3k9IjE1IiByPSIyMCIgZmlsbD0idXJsKCNjaXJjbGUtZ3JhZCkiIC8+CiAgICA8dGV4dCB4PSIxMzAiIHk9IjIxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjiOCI+STwvdGV4dD4KICAgIDx0ZXh0IHg9IjEzMCIgeT0iNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMzI1MzUiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTMuNSI+Q0jhu6YgxJDhu4AgVsOAIFBI4bqgTSBWSTwvdGV4dD4KICAgIDx0ZXh0IHg9IjEzMCIgeT0iOTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMzI1MzUiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTMuNSI+TkdIScOKTiBD4buoVTwvdGV4dD4KICAgIAogICAgPCEtLSBHbG9iZSBhbmQgTWFnbmlmeWluZyBnbGFzcyArIFZpZXRuYW0gTWFwIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsIDExNSkiPgogICAgICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA0ZDYxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgPGVsbGlwc2UgY3g9IjM1IiBjeT0iMzUiIHJ4PSIxMCIgcnk9IjI1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPGVsbGlwc2UgY3g9IjM1IiBjeT0iMzUiIHJ4PSIyNSIgcnk9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPGxpbmUgeDE9IjEwIiB5MT0iMzUiIHgyPSI2MCIgeTI9IjM1IiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPGxpbmUgeDE9IjM1IiB5MT0iMTAiIHgyPSIzNSIgeTI9IjYwIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPGNpcmNsZSBjeD0iNTUiIGN5PSI0NSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CiAgICAgIDxsaW5lIHgxPSI2MyIgeTE9IjUzIiB4Mj0iNzMiIHkyPSI2MyIgc3Ryb2tlPSIjMGQ5NDg4IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgPHBhdGggZD0iTSA5MCwxMCBRIDEwMCwyMCA5NSwzMCBUIDExMCw0NSBUIDEwMCw2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGQ5NDg4IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgPC9nPgoKICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LCAyMTUpIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMxZTI5M2IiPgogICAgICA8dGV4dCB4PSIwIiB5PSIxNSIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzBkOTQ4OCI+KkNI4bumIMSQ4buAOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMzIiPkzhuqFtIHBow6F0IHThuqFpIFZp4buHdCBOYW0gdsOgIGPDoWMgY2h1bWcuPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSI0OSI+eeG6v10gdGjhu6FjIGjGsOG7n25nLjwvdGV4dD4KICAgICAgCiAgICAgIDx0ZXh0IHg9IjAiIHk9IjgyIiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjMGQ5NDg4Ij4qUEhfSOG6oE0gVkkgKDIwMTUgLSAyMDI0KTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9Ijk5Ij5OZ2hpw6puIGPhu6l1IHbhu4Egbmd1ecOqbiBuaMOibiw8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjExNiI+dMOhYyDEkeG7mW5nIGtpbmggdOG6vyB2w6AgY8OhYyBjaMOtbmg8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjEzMyI+c8OhY2gga2nhu4NtIHNvw6F0IGzhuqFtIHBow6F0IHThuqFpPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIxNTAiPlZp4buHdCBOYW0gKGPDsyBzbyBzM25oIHF14buRYyB04bqfKS48L3RleHQ+CiAgICA8L2c+C windmillsPgogIDwvZz4KCiAgPCEtLSBDT0xVTU4gSUkgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIwLCAxOTUpIiBmaWxsPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iMCIgeT0iMTUiIHdpZHRoPSIyNjAiIGhlaWdodD0iNDI1IiByeD0iMTgiIGZpbGw9InVybCgjY2FyZC1ncmFkLWxpZ2h0KSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgIDxjaXJjbGUgY3g9IjEzMCIgY3k9IjE1IiByPSIyOCIgZmlsbD0iIzA0MWEyNiIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjMiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMzAiIGN5PSIxNSIgcj0iMjAiIGZpbGw9InVybCgjY2lyY2xlLWdyYWQpIiAvPgogICAgPHRleHQgeD0iMTMwIiB5PSIyMSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+SUk8L3RleHQ+CiAgICA8dGV4dCB4PSIxMzAiIHk9Ijc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDMyNTM1IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjEzLjUiPk5HVeeG7kk4gVEhBTSBLSOG6okM8L3RleHQ+CiAgICA8dGV4dCB4PSIxMzAiIHk9Ijk1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDMyNTM1IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjEzLjUiPlRIT05HIFRJTjwvdGV4dD4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSwgMTE1KSI+CiAgICAgIDwhLS0gR3JhZCBjYXAgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCAxMCkiPgogICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjAsNSAzNSwxMiAyMCwxOSA1LDEyIiBmaWxsPSIjMGQ5NDg4IiAvPgogICAgICAgIDxwb2x5Z29uIHBvaW50cz0iOCwxMyA4LDIyIDIwLDI3IDMyLDIyIDMyLDEzIiBmaWxsPSIjMDA0ZDYxIiAvPgogICAgICAgIDxsaW5lIHgxPSIzMiIgeTE9IjEzIiB4Mj0iMzIiIHkyPSIyNSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSUzMiIgY3k9IjI1IiByPSIyIiBmaWxsPSIjMmRkNGJmIiAvPgogICAgICB8L2c+CiAgICAgIDwhLS0gRG9jIHNlYXJjaCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAsIDEwKSI+CiAgICAgICAgPHJlY3QgeD0iNSIgeT0iNCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjI4IiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA0ZDYxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8bGluZSB4MT0iOSIgeTE9IjkiIHgyPSIyMyIgeTI9IjkiIHN0cm9rZT0iIzAwNGQ2MSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIDxsaW5lIHgxPSI5IiB5MT0iMTQiIHgyPSIyMyIgeTI9IjE0IiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjIyIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwZDk0ODgiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxsaW5lIHgxPSIyMSIgeTE9IjI1IiB4Mj0iMjUiIHkyPSIyOSIgc3Ryb2tlPSIjMGQ5NDg4IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgIDwvZz4KICAgICAgPCEtLSBCb29rIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjUsIDEwKSI+CiAgICAgICAgPHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI1IiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGQ5NDg4IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9IjEwIiB5MT0iNSIgeDI9IjEwIiB5Mj0iMzAiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjE0IiB5MT0iMTAiIHgyPSIyNCIgeTI9IjEwIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICA8bGluZSB4MT0iMTQiIHkxPSIxNiIgeDI9IjI0IiB5Mj0iMTYiIHN0cm9rZT0iIzAwNGQ2MSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICA8L2c+CiAgICAgIDwhLS0gV2ViL0dsb2JlIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDEwKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNGQ2MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjE3IiBjeT0iMTciIHN4PSI1IiByeT0iMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNGQ2MSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIDxsaW5lIHgxPSI0IiB5MT0iMTciIHgyPSIzMCIgeTI9IjE3IiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPC9nPgogICAgPC9nPgoKICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCAxODUpIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjMWUyOTNiIj4KICAgICAgPHRleHQgeD0iMCIgeT0iMTUiIGZvbnQtd2VpZ2h0PSI4MDAiIGZpbGw9IiMwMzI1MzUiPjEuIEMxqAgU+G7niBE4buuIExJ4buGVSBI4buMQyBUSFXhuqxUPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMiIgeT0iMzIiIGZpbGw9IiM0NzU1NjkiPihHb29nbGUgU2Nob2xhciwgVGjGsCB2aeG7h24gc+G7kSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjYwIiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjMDMyNTM1Ij4yLiBU4bqgUCBDSEkgS0hPQSBI4buMQyBDSFVZw4pOPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSI3NyIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzAzMjUzNSI+TkfDQU5IIDx0c3BhbiBmb250LXdlaWdodD0ibm9ybWFsIiBmaWxsPSIjNDc1NTY5Ij4oS2luaCB04bq/ICZhbXA7IFBow6F0IHRyaeG7g24sPC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEyIiB5PSI5NCIgZmlsbD0iIzQ3NTU2OSI+TmfDom4gaMOgbmcsIFRhaSBjaMOpbmgsLi4uKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMTIyIiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjMDMyNTM1Ij4zLiBTw4FCSCBDSFVZw4pOIESS4buCVEg8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEyIiB5PSIxMzkiIGZpbGw9IiM0NzU1NjkiPihHacOhbyB0csOsbmggS2luaCB04bq/IHbEqSBtw7QpPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIxNjciIHRleHQtd2VpZ2h0PSI4MDAiIGZpbGw9IiMwMzI1MzUiPjQuIE5HVeeG7kk4gTeG7niBVWSBUw41OPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMiIgeT0iMTg0IiBmaWxsPSIjNDc1NTY5Ij4oVOG7VuZyBj4bulYyBUaOG7kW5nIGvDqiwgTmfDom4gaMOgbmc8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEyIiB5PSIyMDEiIGZpbGw9IiM0NzU1NjkiPk5ow6Agbsaw4bubYywgSU1GKTwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIElJSSAtLT4K  PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTk1LCAxOTUpIiBmaWx0ZXI9InVybChjdXN0b20tc2hhZG93KSI+CiAgICA8cmVjdCB4PSIwIiB5PSIxNSIgd2lkdGg9IjI2MCIgaGVpZ2h0PSI0MjUgcng9IjE4IiBmaWxsPSJ1cmwoI2NhcmQtZ3JhZC1saWdodCkiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMzAiIGN5PSIxNSIgcj0iMjgiIGZpbGw9IiMwNDFhMjYiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgPGNpcmNsZSBjeD0iMTMwIiBjeT0iMTUiIHI9IjIwIiBmaWxsPSJ1cmwoI2NpcmNsZS1ncmFkKSIgLz4KICAgIDx0ZXh0IHg9IjEzMCIgeT0iMjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSInInter', system-ui, sans-serif" font-weight="900" font-size="18">III</text>
    <text x="130" y="75" text-anchor="middle" fill="#032535" font-family="'Inter', system-ui, sans-serif" font-weight="800" font-size="13.5">xJDhu4BOSCBHScOBIE5HVeG7kk48L3RleHQ+CiAgICA8dGV4dCB4PSIxMzAiIHk9Ijk1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDMyNTM1IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjEzLjUiPlTDgEkgTEnhu4ZVPC90ZXh0PgoKICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LCAxMTUpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDUpIj4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZT0iMS41IiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSIyIiBmaWxsPSIjMGQ5NDg4IiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjgiIGN5PSIxNiIgcj0iMiIgZmlsbD0iIzBkOTQ4OCIgLz4KICAgICAgICB8Y2lyY2xlIGN4PSI4IiBjeT0iMjQiIHI9IjIiIGZpbGw9IiMwZDk0ODgiIC8+CiAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iOCIgeDI9IjI1IiB5Mj0iOCIgc3Ryb2tlPSIjMDA0ZDYxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8bGluZSB4MT0iMTUiIHkxPSIxNiIgeDI9IjI1IiB5Mj0iMTYiIHN0cm9rZT0iIzAwNGQ2MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iMjQiIHgyPSIyNSIgeTI9IjI0IiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZT0iMS41IiAvPgogICAgICA8L2c+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCwgNSkiPgogICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzNSIgaGVpZ2h0PSIyNiIgcng9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHBhdGggZD0iTSA0LDIwIEwgMTIsMTIgTCAyMCwxNiBMIDMwLDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSI2IiByPSIxLjUiIGZpbGw9IiMwMDRkNjEiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIyMiIgcj0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDA0ZDYxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8bGluZSB4MT0iMzIiIHkxPSIyNiIgeDI9IjM3IiB5Mj0iMzEiIHN0cm9rZT0iIzAwNGQ2MSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICA8L2c+CiAgICA8L2c+CgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUsIDE4NSkiIGZvbnQtZmFtaWx5PSInInter', system-ui, sans-serif" font-size="11" fill="#1e293b">
      <text x="0" y="15" font-weight="800" fill="#032535">*xJDhu5YgVElOIEMaquWTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjMyIiBmaWxsPSIjMGQ5NDg4IiBmb250LXdlaWdodD0iNzAwIj5DYW8gPHRzcGFuIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiMxZTI5M2IiPihnaeG6o25nIHZpw6puLCBjaHV5w6puIGdpYSw8L3RzcGFuPjwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iNDkiIGZpbGw9IiMxZTI5M2IiPmPGoSBxdWFuIG5ow6Agbsaw4bubYyB1eSB0w61uKS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9Ijg1IiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjMDMyNTM1Ij4qUEh_T05HIFBIw4FQICZhbXA7IFRSw41DSCBE4bqqTjo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjEwMiIgZmlsbD0iIzFlMjkzYiI+S+G6v3QgaOG7o3AgbMO9IHRodXnhur90IHbDoCBz4buRIGxp4buHdSB0aOG7sWM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjExOSIgZmlsbD0iIzFlMjkzYiI+dOG6vywgdHLDrWNoIGThuqtuIHThu6sgdHJ1bmcgYsOsbmg8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjEzNiIgZmlsbD0iIzFlMjkzYiI+xJHhur9uIGNhby48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE3MiIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzAzMjUzNSI+KlTDjU5HIEMaquUCBOSOG6rFQ6PC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIxODkiIGZpbGw9IiMwZDk0ODgiIGZvbnQtd2VpZ2h0PSI3MDAiPlRo4budaSBz4buxIHThu5F0IDx0c3BhbiBmb250LXdlaWdodD0ibm9ybWFsIiBmaWxsPSIjMWUyOTNiIj4ocGjhuqduIGzhu5tuIHTDoGk8L3RzcGFuPjwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMjA2IiBmaWxsPSIjMWUyOTNiIj5saeG7h3UgMjAxOSAtIDIwMjQpLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIElWIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg3MCwgMTk1KSIgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iMCIgeT0iMTUiIHdpZHRoPSIyODAiIGhlaWdodD0iNDI1IiByeD0iMTgiIGZpbGw9InVybCgjY2FyZC1ncmFkLWRhcmspIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjE1IiByPSIyOCIgZmlsbD0iIzA0MWEyNiIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjMiIC8+CiAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNSIgcj0iMjAiIGZpbGw9InVybCgjYWNjZW50LXRlYWwpIiAvPgogICAgPHRleHQgeD0iMTQwIiB5PSIyMSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+SVY8L3RleHQ+CiAgICA8dGV4dCB4PSIxNDAiIHk9Ijc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE0IiBsZXR0ZXItc3BhY2luZz0iMSI+S0h_VExV4bqsTiBDSFVORzwvdGV4dD4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCwgMTEwKSI+CiAgICAgIDxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjcwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0IiBvcGFjaXR5PSIwLjQiIC8+CiAgICAgIDxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZS13aWR0aD0iMi41IiAvPgogICAgICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjgwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgPHBvbHlnb24gcG9pbnRzPSI4MCwyNSAxMjUsNTUgMTE1LDExNSA0NSwxMTUgMzUsNTUiIGZpbGw9InJnYmEoNDUsIDIxMiwgMTkxLCAwLjE1KSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgPHBhdGggZD0iTSA4MCw0NSBMIDgwLDExNSBNIDQ1LDgwIEwgMTE1LDgwIiBzdHJva2U9IiMwMDRkNjEiIHN0cm9rZT0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIiAvPgogICAgICA8cGF0aCBkPSJNIDY1LDgwIFEgODAsNjUgOTUsODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgPHBvbHlnb24gcG9pbnRzPSI4MCw2MCA3NCw2OCA4Niw2OCIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgPGNpcmNsZSBjeD0iODAiIGN5PSI4MCIgcj0iMTAiIGZpbGw9IiMyZGQ0YmYiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIiAvPgogICAgICA8Y2lyY2xlIGN4PSI4IiBjeT0iODAiIHI9IjYiIGZpbGw9IiNmZmZmZmYiIC8+CiAgICA8L2c+CgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDI5MCkiIGZvbnQtZmFtaWx5PSInInter', system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">
      <text x="120" y="15" text-anchor="middle" font-weight="normal" fill="#e2e8f0">Viá»c káº¿t há»£p Äa dáº¡ng cÃ¡c</text>
      <text x="120" y="34" text-anchor="middle" font-weight="normal" fill="#e2e8f0">nguá»n tÃ i liá»u giÃºp bá»©c tranh</text>
      <text x="120" y="53" text-anchor="middle" font-weight="normal" fill="#e2e8f0">nghiÃªn cá»©u vá» láº¡m phÃ¡t</text>
      <text x="120" y="72" text-anchor="middle" font-weight="bold" fill="#2dd4bf">Äáº§y Äá»§, khÃ¡ch quan</text>
      <text x="120" y="91" text-anchor="middle" font-weight="bold" fill="#2dd4bf">vÃ  chÃnh xÃ¡c hÆ¡n.</text>
    </g>
  </g>

  <!-- Footer metadata of Infographic -->
  <rect x="40" y="635" width="1120" height="30" rx="6" fill="rgba(0, 77, 97, 0.2)" stroke="rgba(45, 212, 191, 0.1)" stroke-width="1" />
  <text x="60" y="654" fill="#a5f3fc" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="0.5">NGUá»N THAM KHáº¢O CHÃNH THá»¨C â¢ Äáº Higgins KINH Táº¾ - ÄHQGHN (VNU-UEB)</text>
  <text x="1140" y="654" text-anchor="end" fill="#2dd4bf" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold">DESIGN BY DOAN NGOC LINH â¢ MSV: 25051227</text>
</svg>";
*/

export default function InformationRetrieval() {
  const [searchQuery, setSearchQuery] = useState<string>(
    '"lạm phát" AND "Việt Nam" AND "kinh tế vĩ mô" year:2015..2024 filetype:pdf'
  );
  const [copiedQuery, setCopiedQuery] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(searchQuery);
    setCopiedQuery(true);
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  // List of source categories (Nguồn thu thập thông tin)
  const informationSources = [
    {
      category: "Cơ sở dữ liệu học thuật",
      items: ["Google Scholar", "Thư viện số quốc gia / trường Đại học"],
      icon: BookOpen,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20"
    },
    {
      category: "Tạp chí khoa học chuyên ngành",
      items: ["Tạp chí Kinh tế & Phát triển", "Tạp chí Ngân hàng", "Tạp chí Tài chính..."],
      icon: FileText,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      category: "Sách chuyên khảo",
      items: ["Giáo trình Kinh tế vĩ mô (trường đại học uy tín)"],
      icon: BookMarked,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      category: "Nguồn mở uy tín",
      items: ["Tổng cục Thống kê (GSO)", "Ngân hàng Nhà nước Việt Nam (SBV)", "Quỹ Tiền tệ Quốc tế (IMF)"],
      icon: Globe,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  // CRAAP evaluation metrics
  const evaluationCriteria = [
    {
      name: "Độ tin cậy (Authority & Accuracy)",
      status: "Cao",
      desc: "Tác giả chủ yếu là giảng viên, chuyên gia, nhà nghiên cứu và các cơ quan quản lý nhà nước uy tín.",
      stars: 5,
      color: "from-teal-500/20 to-teal-500/5"
    },
    {
      name: "Phương pháp & Trích dẫn (Accuracy)",
      status: "Tốt",
      desc: "Kết hợp tốt giữa lý thuyết nền tảng và số liệu thực tế; tỷ lệ trích dẫn từ trung bình đến cao.",
      stars: 5,
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      name: "Tính cập nhật (Currency)",
      status: "Đạt chuẩn thời sự",
      desc: "Đảm bảo tính thời sự rất tốt (phần lớn tài liệu xuất bản trong giai đoạn 2019 – 2024).",
      stars: 5,
      color: "from-blue-500/20 to-blue-500/5"
    }
  ];

  return (
    <div className="space-y-6" id="information-retrieval-project">
      {/* Top Banner Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-navy-900/60 p-5 rounded-2xl border border-navy-800/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
        <div className="space-y-1 pl-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-wider font-mono">Bài tập 2 • Mục 2.4</span>
            <span className="text-xs text-navy-400 font-mono">MSV: 25051227</span>
          </div>
          <h4 className="text-base font-bold text-white font-display">
            Tìm kiếm và đánh giá thông tin học thuật
          </h4>
          <p className="text-xs text-navy-300">
            Sinh viên thực hiện: <span className="text-teal-300 font-semibold">Đoàn Ngọc Linh</span> — Lớp học phần: <span className="text-teal-300 font-semibold">QH 2025E KTQT 10</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-navy-400 font-mono">Trạng thái:</span>
          <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-500/20 text-teal-300 rounded border border-teal-500/30 font-mono flex items-center gap-1">
            <CheckCircle2 size={10} /> COMPLIANT
          </span>
        </div>
      </div>

      {/* Main Grid containing the Sandbox layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Column 1: NGUỒN THU THẬP THÔNG TIN */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <BookOpen size={14} className="text-teal-500" /> NGUỒN THU THẬP THÔNG TIN
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-teal-500/10 text-teal-400 rounded font-mono border border-teal-500/20">
                SOURCES METADATA
              </span>
            </div>

            {/* Simulated Search query input */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-[10px] font-mono bg-navy-900 border border-navy-800 text-teal-300 rounded-xl pl-8 pr-16 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <Search size={12} className="absolute left-2.5 top-3 text-navy-400" />
                <button
                  onClick={handleCopyQuery}
                  className="absolute right-1.5 top-1.5 px-2 py-1 bg-navy-800 hover:bg-navy-755 text-[8px] font-bold text-white rounded border border-navy-750 transition-all"
                >
                  {copiedQuery ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* List of Sources */}
            <div className="space-y-3">
              {informationSources.map((src, index) => {
                const IconComponent = src.icon;
                return (
                  <div key={index} className="p-3 bg-navy-900/40 rounded-xl border border-navy-850 hover:bg-navy-900/60 transition-all duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-lg ${src.bg} ${src.color}`}>
                        <IconComponent size={12} />
                      </div>
                      <span className="text-[11px] font-bold text-white font-display">{src.category}</span>
                    </div>
                    <ul className="space-y-1 pl-7">
                      {src.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-[10px] text-navy-300 list-disc list-outside leading-tight">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-navy-800/40 flex items-center justify-between text-[9px] text-navy-400 font-mono">
            <span>Chủ đề: Lạm phát Việt Nam</span>
            <span>(2015 – 2024)</span>
          </div>
        </div>

        {/* Column 2: ĐÁNH GIÁ NGUỒN TÀI LIỆU (CRAAP) */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-teal-500" /> ĐÁNH GIÁ NGUỒN TÀI LIỆU
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-purple-500/10 text-purple-400 rounded font-mono border border-purple-500/20">
                CRAAP MATRIX
              </span>
            </div>

            {/* Criteria Mapping */}
            <div className="space-y-3.5">
              {evaluationCriteria.map((crit, index) => (
                <div 
                  key={index} 
                  className={`p-3.5 rounded-xl border border-navy-850 bg-gradient-to-br ${crit.color} hover:border-navy-700/80 transition-all duration-300 space-y-1.5`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white font-display leading-tight">{crit.name}</span>
                    <span className="px-1.5 py-0.5 text-[8px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded">
                      {crit.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-navy-200 leading-normal font-sans">
                    {crit.desc}
                  </p>
                  <div className="flex items-center gap-0.5 pt-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={10} 
                        className={star <= crit.stars ? 'text-teal-400 fill-teal-400' : 'text-navy-700'} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-navy-800/40 text-center">
            <span className="text-[10px] text-teal-400 font-mono font-semibold flex items-center justify-center gap-1">
              <CheckCircle2 size={11} /> Đạt tiêu chuẩn kiểm chứng của Linh
            </span>
          </div>
        </div>

        {/* Column 3: MINH CHỨNG THỰC TẾ & KHÁM PHÁ CHI TIẾT */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <TrendingUp size={14} className="text-teal-500" /> MINH CHỨNG THỰC TẾ
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-teal-500/10 text-teal-300 rounded font-mono border border-teal-500/20">
                INFOGRAPHIC
              </span>
            </div>

            {/* Image Container representing the beautiful infographic */}
            <div className="relative group rounded-2xl border-2 border-teal-500/30 overflow-hidden bg-[#020b18]/90 flex flex-col items-center justify-center p-2.5 text-center transition-all duration-300 hover:border-teal-400/80 hover:shadow-[0_0_25px_rgba(45,212,191,0.12)]">
              <img 
                src={INFOGRAPHIC_BASE64} 
                alt="Báo cáo nghiên cứu: Lạm phát và các yếu tố ảnh hưởng tại Việt Nam - Infographic tóm tắt" 
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-xl object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

            {/* Source Credit */}
            <div className="mt-3 text-center text-[11px] text-navy-400 italic">
              Nguồn: Số liệu Tổng cục Thống kê &amp; Đồ họa hỗ trợ bởi Gemini
            </div>
            
            <div className="mt-4 flex flex-col items-center gap-2.5">
              <a 
                href="https://docs.google.com/document/d/1c-iLsjCQa5c4jEZPSjpMdbMYG_a6I2Hr/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 hover:text-teal-300 text-xs font-bold rounded-xl border border-teal-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
                title="Mở tài liệu báo cáo nghiên cứu đầy đủ trên Google Drive"
              >
                <ExternalLink size={13} />
                <span>Xem báo cáo nghiên cứu đầy đủ (Bài 2)</span>
              </a>
              
              <p className="text-[10px] text-navy-300 text-center italic leading-relaxed font-sans max-w-[280px] mx-auto">
                Hình 2: Infographic tóm tắt Báo cáo nghiên cứu: Lạm phát và các yếu tố ảnh hưởng tại Việt Nam.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800/40 space-y-2">
            {/* Interactive button to trigger Modal details */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(20,184,166,0.15)] cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Khám phá chi tiết Sandbox</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Full-Width General Conclusion */}
      <div className="bg-navy-950/60 p-4 rounded-xl border border-navy-800 shadow-md">
        <div className="flex gap-3">
          <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 h-fit">
            <Info size={16} />
          </div>
          <div>
            <h5 className="text-xs font-bold text-white mb-0.5">Kết luận chung của Linh:</h5>
            <p className="text-xs text-navy-300 leading-relaxed font-sans">
              "Việc kết hợp đa dạng các nguồn tài liệu (từ lý thuyết giáo trình, phân tích chuyên sâu của tạp chí đến số liệu thực tế từ Tổng cục Thống kê/NHNN và quốc tế) giúp bức tranh nghiên cứu về lạm phát đầy đủ, khách quan và chính xác hơn."
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED DIALOG MODAL (UX INTERACTION) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-navy-900 border border-navy-750 p-6 md:p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-navy-800 text-navy-400 hover:text-white transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 border-b border-navy-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[9px] font-bold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-wider font-mono">Báo cáo Sandbox Lab</span>
                  <span className="text-[10px] text-navy-400 font-mono">Bài 02 • Đánh giá nguồn tài liệu học thuật</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white font-display">
                  Đề tài: Lạm phát tại Việt Nam và các yếu tố ảnh hưởng
                </h3>
                <p className="text-xs text-navy-300">
                  Phạm vi nghiên cứu: <span className="text-teal-300 font-semibold">2015 – 2024</span> • Nghiên cứu về nguyên nhân, tác động kinh tế và các chính sách kiểm soát lạm phát tại Việt Nam (có so sánh quốc tế).
                </p>
              </div>

              {/* Detailed Content Divisions */}
              <div className="space-y-4">
                
                {/* 1. Academic Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-navy-950 rounded-xl border border-navy-800 space-y-0.5">
                    <span className="text-[8px] font-bold text-teal-400 font-mono uppercase tracking-wider">Học sinh thực hiện</span>
                    <p className="text-xs font-bold text-white">Đoàn Ngọc Linh</p>
                    <p className="text-[10px] text-navy-400">Mã sinh viên: 25051227</p>
                  </div>
                  <div className="p-3 bg-navy-950 rounded-xl border border-navy-800 space-y-0.5">
                    <span className="text-[8px] font-bold text-purple-400 font-mono uppercase tracking-wider">Lớp học phần</span>
                    <p className="text-xs font-bold text-white">QH 2025E KTQT 10</p>
                    <p className="text-[10px] text-navy-400">Trường Đại học Kinh tế - ĐHQGHN</p>
                  </div>
                </div>

                {/* 2. Collected Information Sources Detail */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">Chi tiết các nguồn thu thập thông tin</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-850 space-y-1">
                      <p className="text-xs font-bold text-white flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                        Cơ sở dữ liệu học thuật & Giáo trình
                      </p>
                      <p className="text-[11px] text-navy-300 pl-2.5 leading-relaxed">
                        Tìm kiếm trên <strong>Google Scholar</strong> và các <strong>Thư viện số</strong> uy tín kết hợp với <strong>Giáo trình Kinh tế vĩ mô</strong> để nắm vững các lý thuyết cốt lõi về cung tiền, chi phí đẩy và cầu kéo.
                      </p>
                    </div>
                    <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-850 space-y-1">
                      <p className="text-xs font-bold text-white flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        Báo cáo từ Tạp chí & Tổ chức quốc tế
                      </p>
                      <p className="text-[11px] text-navy-300 pl-2.5 leading-relaxed">
                        Thu thập số liệu thực chứng từ các tạp chí khoa học (<strong>Tạp chí Kinh tế & Phát triển</strong>, <strong>Tạp chí Tài chính</strong>) kết hợp báo cáo số liệu vĩ mô của <strong>GSO, Ngân hàng Nhà nước</strong> và tổ chức tiền tệ <strong>IMF</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Evaluation details */}
                <div className="p-4 bg-navy-950 rounded-xl border border-navy-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-1">
                    <ShieldCheck size={14} />
                    <span>Chi tiết quy trình đánh giá CRAAP của Linh</span>
                  </h4>
                  <div className="space-y-2.5 text-[11px] text-navy-200">
                    <div>
                      <span className="font-semibold text-white">✓ Độ tin cậy cao:</span> Các bài báo chuyên sâu và giáo trình được viết bởi giảng viên, chuyên gia kinh tế đầu ngành; số liệu thống kê được cập nhật từ Tổng cục Thống kê và NHNN là dữ liệu chính thống quốc gia.
                    </div>
                    <div>
                      <span className="font-semibold text-white">✓ Phương pháp nghiên cứu khoa học:</span> Các tài liệu kết hợp hài hòa giữa lý thuyết kinh tế vĩ mô (phân tích định tính) và các kiểm định định lượng/mô hình thống kê thực chứng (phân tích định lượng), độ chuẩn xác trích dẫn cao.
                    </div>
                    <div>
                      <span className="font-semibold text-white">✓ Tính cập nhật tối ưu:</span> Hầu hết tài liệu được lọc xuất bản từ 2019 đến 2024, bao quát cả giai đoạn lạm phát chịu tác động mạnh từ biến động chuỗi cung ứng toàn cầu do đại dịch COVID-19 và căng thẳng địa chính trị thế giới.
                    </div>
                  </div>
                </div>

                {/* 4. Action CTA Buttons */}
                <div className="p-4 bg-teal-500/5 rounded-xl border border-teal-500/15 text-center space-y-3">
                  <p className="text-xs text-navy-200">
                    Báo cáo học thuật của Đoàn Ngọc Linh đã được hệ thống hóa đầy đủ trên tệp Word phục vụ cho báo cáo học tập.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                    <a 
                      href="https://docs.google.com/document/d/1c-iLsjCQa5c4jEZPSjpMdbMYG_a6I2Hr/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    >
                      <span>Xem tài liệu nghiên cứu đầy đủ trên Google Drive</span>
                      <ExternalLink size={12} />
                    </a>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 bg-navy-800 hover:bg-navy-750 text-navy-300 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 border border-navy-700"
                    >
                      Đóng cửa sổ
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
