// ==UserScript==
// @name Sky Blue
// @CSS feita por Eddie
// @Adaptaï¿½ï¿½o para Greasemonkey por Igor Thiago
// @include http://*orkut.com/**
// @exclude *.js
// ==/UserScript==





var um,dois;
    um = document.getElementsByTagName('head')[0] ;
    if (!um) { return; }
    dois = document.createElement('style');
    dois.type = 'text/css';
    dois.innerHTML = 'div.navPanelTop, div.navPanelBottom { background: transparent !important; border: 0px !important;}';
    um.appendChild(dois);



css = 'data:text/css;base64,' +
		'LyoNClNraW4gQ1NTIHBhcmEgb3JrdXQgbmEgY29yIFNreSBCbHVlIGZlaXRvIHBvciBlZGRpZSANClZl' +
		'cnNhbyAwLjUgKCAyNS8xMC8yMDA2ICkNCg0KYXBlbmFzIENTUyBkbyBvcmt1dCBkZWZhdWx0IGRhIHBh' +
		'Z2luYSBkZSBwZXJmaWwgZSBtb2RpZmljYWRvLCBlIGNvbSBhbGd1bWFzIGlkZWlhcyBkYXMgc2tpbnMg' +
		'UHJldE9ya3V0IGRvIENvbmRlIGUgT3JrdXRlYWRvIGRvIE1hY2Fjb0xPQ08NCg0KY29kaWdvIHRvZG8g' +
		'YmFndW5jYWRvLCBxdWFudG8gdGl2ZXIgbWFpcyB0ZW1wbyBkb3UgdW1hIG9yZ2FuaXphZGEgcnNyc3Jz' +
		'cnMNCiovDQp0ZFtiYWNrZ3JvdW5kKj0idHI0LmdpZiJdDQp7DQoJZGlzcGxheTogbm9uZSAhaW1wb3J0' +
		'YW50Ow0KfQ0KLmJ0bg0Kew0KY29sb3I6ICNmZmYgIWltcG9ydGFudDsNCn0NCi5idG5Ib3Zlcg0Kew0K' +
		'Y29sb3I6ICMwMDAgIWltcG9ydGFudDsNCn0NCi8qDQpNZWxob3JhbmRvIGEgdmlzdWFsaXphPz9vDQoq' +
		'Lw0KYVtocmVmKj0iL1Byb2ZpbGVGLmFzcHg/dWlkPSJdOmhvdmVyLA0KYVtocmVmKj0iL1NjcmFwYm9v' +
		'ay5hc3B4P3VpZD0iXTpob3ZlciwNCmFbaHJlZio9Ii9BbGJ1bVZpZXcuYXNweD91aWQ9Il06aG92ZXIg' +
		'eyANCmNvbG9yOiAjNEE3MDhCICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0' +
		'YW50DQp9DQp0ZFtjbGFzcz0idGFiQWN0aXZlIl0gew0KY29sb3I6ICM0QTcwOEIgIWltcG9ydGFudA0K' +
		'fQ0KdGRbY2xhc3M9InJvd0xhYmVsIl0geyBjb2xvcjogIzE5MTk3MCAhaW1wb3J0YW50fQ0KdHJbYmdj' +
		'b2xvcj0iI2U1ZWNmNCJdIHsgYmFja2dyb3VuZDogIzdFQzBFRSAhaW1wb3J0YW50fQ0KdHJbYmdjb2xv' +
		'cj0iI2Q0ZGRlZCJdIHsgYmFja2dyb3VuZDogIzZDQTZDRCAhaW1wb3J0YW50fQ0KdGFibGVbc3R5bGU9' +
		'InBhZGRpbmc6IDRweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjM2LCAyNDQpOyJdIHsgY29s' +
		'b3I6ICMxOTE5NzAgIWltcG9ydGFudH0NCnRyW2NsYXNzPSJtZXNzYWdlQm9keSJdIHsgY29sb3I6ICMw' +
		'MDAwMDAgIWltcG9ydGFudDsgYmFja2dyb3VuZDojN0VDMEVFICFpbXBvcnRhbnQgfQ0KdGRbY2xhc3M9' +
		'InRhYlBhbmVsIl0geyBiYWNrZ3JvdW5kOiM2Q0E2Q0QgIWltcG9ydGFudCB9DQovKg0KVHJvY2EgZGUg' +
		'aW1hZ2Vucw0KKi8NCmltZ1tzcmMqPSJ0cjIuZ2lmIl17ZGlzcGxheTpub25lICFpbXBvcnRhbnR9DQpp' +
		'bWdbc3JjKj0idHIyLmdpZiJdLA0KdGRbd2lkdGg9IjI0Il17IA0KYmFja2dyb3VuZDogdXJsKGRhdGE6' +
		'aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEdBQVlBSWNBQUVwd2kyNlcxV3ltelFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQUFBQVA4QUxBQUFBQUFZQUJn' +
		'QUFBaFZBQU1BR0Vpd29NR0RCQVVpWExoUUljT0hDU0ZLQk9Cd1lrT0xEeXRpTktoeFkwU1BCenVDRk9r' +
		'eGdNbVRLRTlLRk1DeXBVdVdFMS9LdENqVEpjYWFNRy9XOUxpVDUwdVFBSDRDdFFrMGFNNmlSNUVHQkFB' +
		'NyApICFpbXBvcnRhbnQ7IA0KYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50Ow0K' +
		'fQ0KDQp0ZFt3aWR0aD0iMjQ2Il0gew0KYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2' +
		'NCxSMGxHT0RsaDlnQWVBUGNBQUVOaGRTQXlQVUpsZlUxMGoxUjhsMHh5aldhVXNEcFliU2crVFhtcXhS' +
		'WWlLaVk2U0NwQlVCSWNJenhkY2xGOG1tMlpzV1NRcTMrd3kxdUNtVEZNWGg0dU9WRjRrMTZJb3poV2Fq' +
		'bFZaajVmZFU1MWtHaVZzRFJRWXpOUFlVZHRobktodkQ5Z2QwNTRsR0NMcGxWOW1IU2p2bkNldVM5SVdY' +
		'Q2R0bCtKcERCSldscUdvMXFGb0ZaL21qQkZVbU9QcWtweWpTSTBRR1NQcWl4RVZFOTJrUmdsTFZ1RW4x' +
		'WjVqazkya2xTQW5WSjZsV09PcVlLMTBFaHFnQm9vTVcyYXRWTjdsbGlCbkdtV3NXYVRybktndW1pV3Ns' +
		'RjVsRWh2aVU1dGdFUm9nU1U1Um5lbXdYU2t3Q2xBVDNXa3Z6WlRabmFud21HT3FpYzdTbG1DblRCS1hC' +
		'MHNObkdmdWt4empEVlJaR0dMcEdTU3J6ZFZhVkYzalVCaWVWNkVtMVorbVdXUnJGeUdvUTBVR1hPaXZE' +
		'aFJZVjJIb202Y3QxeUVuR3FYc20rY3RYeXR5Q3RDVVh5dXlXeVp0R3VZc3kxQlRTNUdWMzZ2eXlNMlFr' +
		'MTJraGttTDNPanZuQ2d2RWx3aWlRNFJXT1FyRXgxa1dDTnFGMkxwMTJKcGx1SXBWdUZvRFpOV29Henpo' +
		'd3FORjZLcGtScGdsdUhwRm1Ebm15V3JrVnFnMnVWcldlVXIxQnloakpJVlhXbHdCOHZPMmFSclZoOWsx' +
		'ZDhraEFaSDBacmhRWUpERHhYWndrT0VSUWZKNE8yMFd5bXpVdHhqRkIza2xlQW0yR01wMktOcUcrZHVF' +
		'cHhqR2FTclMxRlZpTTFRcUs4NUtLODVXcVp0VlYrbVZxRG5pNUhXRitLcFhHZ3UyeWF0cU85NVMxR1Zr' +
		'eHpqaHNxTkcrY3VHMmJ0elZTWlcyYnRpUTNSS2pBNVdpVXJ6dGJjRko1bEhpb3d5WTZSMnVadFZCN21L' +
		'Szk1VzZjdUcrZHVXbVl0SUswejAxMmtWeUpwVmVEb0tTOTVYS2d1VDFaYW02ZHVXMmN0MUI2bHlnOVMy' +
		'cVl0R2lUckgydXlVdDBqMiticzI2YnRsbUZvcUc4NUVkdWgzS2Z1WUt6ejA1emlpVTVSMyt4eklDeXpX' +
		'dVl0R09Lb0NjNVJXcVhzUzFBUzJPUnJXV1NybE42azFGNmxXdVdya0ZrZkZtR29tZVJxR0NJbnlFelAz' +
		'dXN4MitldW0rZXVUWk9YVFZTWmpwVVpHNmR1R3VhdFg2dnlUWlRaMUY0a0U1MGkxTjVrRVpsZVRSTFdX' +
		'eVhzRU5uZjJpVXJTazZSS0c3NUVwd2l5SDVCQUFBQUFBQUxBQUFBQUQyQUI0QUFBai9BUDhKSEVpd29N' +
		'R0QvaElxWE1pd29jT0hFQ05LbkVpeG9rV0oxRWlWYXNXeGxhOVNwRUpxTEVVU0pFUmp0bEttTkdaTVlj' +
		'aFN2anA2QkVrcTQ4aVBKaTlHUE1pejUwQi9Qb01LSFVxMHFOR2pTQWRxZXJYQmdnNFNYNzZRQUdKa0V3' +
		'MGFtNHpvMkdwaHd5dE5SalVWR0xBcEZ4QVNwMDZSSUtEREFvME5HMmhvQmRLV3hxc0NvSkxxRFFwMHI5' +
		'Ky9nQU1QSGJ1SlFKQXlJenp0NkpUQ1JwQXZwemloK2hQR0JpY2Rkc0VPQlZWZ1E2NFdOaTZNNk9TcGs2' +
		'b3lobHFzL1RLRjhwOGdCRFo5RmZ5M0wrM2J1SE1QMVRUQXdwY3lNdEFBQXpGbUZhMWJPMVNsNkJTS2c1' +
		'QWhuYVlBeWF5cHV2WHIxd2NZNFpRaVZCc1RxMENzLy9ya0psU25DMlZVUlhDTzNBWUoyZGl4Q3dSVnZZ' +
		'RDk2cmR0Njk3UFgzY0JIS2Rjd0VFOFVSUXpoeDRQOUJHTUNiUndJOFFLaGZoUnlDQTd1R2VFQlJodVlo' +
		'VmNjVjIxd1FCa2ZaSENIaXNRd3djTExFeW9SUkVtdU1GQkd4QktPQTBZWVh4UmxZWlk0ZmpoSzY4TXNN' +
		'RW1HRnF3aVZjRmFPYVhmdjBscWVSZW9BeWd3eCtLY1BBQUlnNXNzUVVHSVlCU1NBSzZnTkFMREtDSTRJ' +
		'YzBFVnhnd3hTb29ESUZKNm9SZ0ZaVUJGUUZCQ29SdlBCQUVnZDA0TUVUR0hUeHlncFFOS0xMQTYvY01j' +
		'Y0RuMFNRQWlxY0JCRUVKNDJ5ZVFwVlJnQnhTaEEyL0lGS0VDUVk0WldSU1NHNTVLaWtDcVVKRFMxMDhr' +
		'c09BblF3QXdNenpQOUFnUU9FN01GREkxMGNjSUFHTENSZ0FocWhQRExFRUdEc01BSjZGNmd5Z2lwaGNF' +
		'TEFiMElZUUVnSENJd2lSelpTekxDRkFIc0lnNGtBdUJ6Z0FDZ0ptQ0VFR0M5RUVNRU82YjdnaVNwL1RH' +
		'RklHQ09Bd1o2aVU4VDJ5bDZpbHVydnYwcHRNa1Vvckh5QVJSTzFBSURPQ1Nkc0VjSVZtSXd4U3lvenFJ' +
		'QU5Kcm9rUXdzcnNpakRDaHFLQ09IY0VBYUlzOE1GVTB5aHlnOUY0TkpFQlhSNFV3a3NqalRoZ1FPWVlQ' +
		'SkVLcTVRb0VFZ3VzakNTelB5OExJS0swTVhNWVE0TXF6M0NTc2tGNkhNRHhIOFFRQU5ldlVMOE5ha0Zt' +
		'REVIeUtISU1vb0FSeUNDUUFlNE5JRklaaUFRQVV6dFNnQkFDWmh3Q0NDQ0N0QUk4SUREMWovc1FRN2ZQ' +
		'TU54Z1YvZEdLR0tlL2dRY2NsakdDaUFCM3FORUhCTVppa3dvd1VETXlDQ1ErOVBMRE1NQ0lJMDRjSXkv' +
		'RE5paFVnSkZQTUswa0lRTWdjeEpnUmlnMUFoTXIxN1FCNy9RY2FSVGl3aGpvQm9JTkpEN1RlOFVyYlZD' +
		'd1FRQVdWeklQRnJsMkFvSUVHQWt6Q0FROUxISEhIM3F4MFVvWW5uNWlDUlMyTE42NUFEWTVJb1lJMW1J' +
		'aXl3QUlJVUpDekFDRTRvQ3NtMklncndCR05QTE9PRWVaNHdnbFNvWUl0SUNJSG4vQUVKNUNpTmR3NWNE' +
		'OEZzSUFOT0dDQUxvd3RBQUNJZ3hQR0VDZ21YS01FRk1pR0lHcVFEeThnUUFWUDRBSW1OSUFGZW1EZ0RK' +
		'aklBaTRja0lSQ21PQms0Qk9mSEdyQU9NZlZJQUNTWTU4ci82U3dBQ21jSUdkYm9NQUpZSFcyR1p5Z0F3' +
		'Y29BZDF3UVFIbGVTRUF6T2pBSkF3Z2hEOGNwWUVQRE9OdE5MR0pJSUJCRmtmb2dCVFVnWWNNNkFNVHd2' +
		'Q2ZCanVndUFhODRRMUE5QUEvTUhFUENsRGhCUGpBeEFTbzBBRU45R0VWT0F3ZkZrWlJnd2E0SUJxWG9N' +
		'TW9adkFFQ1dCQ0JVU1VBaHh5UmdVRzdFSWRvOEFFTWtheEN3WlFnWDBBT0lFU1lLRUF4d2tDQVFmZ3d5' +
		'ZFVZUlF3aXZHV2dOSEVCazR4Z2src0lBU3B3TU1vMUdjUE5taEREUkp3Z2dkR29RQXhOQklXc015WkRM' +
		'QndnaWFrQWhPUldBTVZITUFCSzNpaURKMElYd2Rpb0FCSlNPSVNEYWdCSGxUZ2pKeFJnQmxGRkVYT1JD' +
		'R0ZHRlRCRVppQWh5TmlzUCtBTmFBQUV5ZVFRZ1VVMEFCTVJMSVdXQmdBRVRwUkZGdmk4cUY2YVJJUXdz' +
		'Q0JWWkJqQzAyUXd5aVk0UUZDQUVNWVBBQ2hPaHBnQ1VwSWdnNE1nRVRPZE9FQUNpQWdHNkpraGdvMEVB' +
		'd3pqQ0FNbllpRktUcWdqa3VZc3dFTm9BTVpFcEV6VExoVUNsS1FaL3ZxZWM5ODduTVhUVWdESnRZZ0Ix' +
		'aWdFeDBLZ01VQzN2RUtFSGpDSWhBTksyNWVZWVFwUkdBTUVpQUJCYVF3aWxFMEFRc2hZRVhiVXVFSVNa' +
		'UlVESFJZQXhnd3NZMXZkWUFaTVVnRVBQQndnaTdZb1EwcCtNTUlkRHJPY3A0enFPdHNwMUVSZ0ZTbDB0' +
		'T2UrTlJuRExLQkFLazJRUjArdU1RbGZPQ0RtbUZnR0Y3TmhHcFh5MXJXaXZXMWdpSHJGRjVnaFRqL1lN' +
		'SUVHVmlqVzJjbEFSTTBvUW9rcFFSZTE4QUZIandqRUMzWUFqTWMwUTFBeENBVjVnQUJHc3FBQ2xYb0ZB' +
		'czdkR1EwSGljSFVSd2daNWlNNXp5Wm10bDlLcUd6bUVCQUFFS3JnQW80QWcrcGNNQXlyTkNKMXRwWHRi' +
		'RE5yMSthOUNRdzhJSUpUamhHQ2JpZ2hBRFVnaG1pU0VNMGRpRUlrb29CcjAzUUFBK1F5WUVESUtBS1NG' +
		'Q0FJMXdoZ0ViY0lnd3F1MjR0ZktDQWZHQ2lCajZJSEFXczBMNzNKWFc4bUhWcURNNHJWUVNvWTRRK0tJ' +
		'YytJSUNDTVRUaUV5TzRiMnYxUytTazZKSUVLUkRIQS9SZ2pnUEFjQkV4QU9VQ0lBR0JVVmhWRFAxNEhE' +
		'TndzWVJuUEFNS0RtZ0NMQURSZ0NxNGdoQzZtRjBRckNzK1BNQ2kvd2FBd0FRZDZPQ0liTXpBQkZOVndp' +
		'NWV2RlI3VmlDZkZWQUhqVEhSaEZGVXdBZUN3TVFpQU5DRGV3d0NHRUVXTW42TFRPbWluS29GbmhEQ0Ev' +
		'WnhBQTlNQUJOVkJwNGNiZ0NCRzVjVEhDN3dnUlF3OEFJSnFFRWJYWmdCTE40Z0NVR2tnZ2FOa01HYVVu' +
		'QmROOFA1eERXb2dsdi8yUVE4N05rVk9ZUERHbUdSYURKVUlRQktpQ29tWm9BSFI4Q2lDcUtVWEFnZVlJ' +
		'SklDN25TNE40TnFuYlFEQkcwVkJRcXJYSmJsUkNKS3NQc0VpNUFRaFVXZ0FVTFhPTzQ5bkFGTE13cENC' +
		'VVlZZ3llQ0VJTGVDMCs4dlZRQVFxb2doejhpUWtHR0ZzSzE3d2tNMERyQTB5NG83UktZRGdWTWxvRmJG' +
		'ZENDbFRZOWl3bEhlNlMrd1FVRy8vNFFpZFcwUXNOZERLUU4xQ0NGSm9naW5SRW85anFxQUFaeW9HSE5k' +
		'Q0RFTnVRZ0RCU2tJcDlTNklLRktEdENGcndoUXZRSWhnSGtFSVZGQUNPRzZBNEJwS2pYQ2RoNVlHYzBj' +
		'TVZDNmdBdHNsUWdkMFNZWGdVWU1BbzhGa0pCSGhnSDhYNHdRVytiZks2SDJRQUJMaEFHNGlCaUMya1ln' +
		'MXJZSUEyWjhGbElzeUNBbkNZd2R3b2dBVU5mS0FPMnNERU4wVGhBMGswSUFCYkNBWXRMckNXTUtDQkEr' +
		'YWdRclVkSVdwUnZDTUVrY2NGRnJDd0JRM2tqQkFZd0tRU0ZyR0dCY3pnWms3QVJDaTZRSThaU0dFUkNF' +
		'akZBV0F3QkE3ODRiNTJUMzVCWG1FQnM3SWlCeDl3QUQxbWdZVStmU0FLUElEQ0pPaW5nWHBnWWh5RU9J' +
		'TC9DTUpoeVNXa1lxQStRRUFYa3NFQjJ1a0FGYUVJaHdoQzBBR2VuVUFGaGZ4QUh5U2dqVmNRSWdtVG9B' +
		'ZHg4QXpoVUEwaHNBVWU4QTRZZ0FXNElBQjZVQWNKa0FDRlVBME9nQVVkTUFzT2NBZm5ZQVlLWkYvSzk0' +
		'RUNvVXNFRUFaRFlBWlI4QUF3VUExSE1BY3J3QXRMVUFLeUVEZ1BRQXhxVUFTQlV3d0pBQVZ0NEFFTG9B' +
		'NVM4QVI2MEE0eXdBa1kwZ0lqTUFKOEF3cUlrQVNJTUFuUXNBSlJVQndnSUlNUElCNTFNQTBQTUF5Z29B' +
		'aFQ4QXFsOHdCb1FBdWZzQXBSa0FNd2NBUXc4QUJSWUFZUllBTTZNR1FnK0lGTHNRa2s4QWN2NEFhckFB' +
		'eS9vQXlyRUF2QUVnR2hnQVkvWUFabThBTnUwQVkvSUEyZlFBUXgrQW9hLytBQkZIQUExZUFIYm5BQlY3' +
		'TUJPakFGblNBRW4xQUNTd0FGUzlBSUlHQXVqNUF1UW9DSWJTQUVFU0FEUStBR2FNQU5JRkFDSlRBR1Zr' +
		'QUxIUEFDb3hFQmFHQUN2eUFMclBBSmFGQWhWK05hY1FpQ2MyZ1lGK0FKWUJBS29mQUN6S0ltTmxBR0th' +
		'QUt5bkVCRjVBQ0kvQUN0ekFFZkRNSEt0Z0xVY0FLQVdjQlBFSURRSEFZMlFnRzZoZ0I3eElHbXpJdktS' +
		'Q1A3amdGb1RFQ083Q0tNdUF1ekRJRkxjQUpVd0JPRVFBR0VlQTlRVEFkcjdCYXhWaU1TOUVVUVBBRlFU' +
		'QUZBa2NDT25BaFp1RW1hMEVBYnRJQy8rZ0plVkFFck5DTFZvQUcwYUVERzFBa1RHRUJsdEtQajhJSlg4' +
		'QVdGMUlwYmtJQVFKQUxXa0VBcDlDUGtJUENkRk1oSkVCaUtaSHlCVURRRlVVeWFRa1poL1F4RmgzeUZn' +
		'UEFJd1hRSXlEeWxDQWlGeVF3QlNtd0E4c0lCdDV6R1NVSkZtTFJJeHp5RmgreWxQYkJJMURKSTE3SklS' +
		'd0NJbmZSbEQ1eUZVcFpKSG1SQ1VVNWwwcFJIWGxoS3E5QUE3bEFBdjRJa1VDNUNRTlFKUDlpSFhkSmw0' +
		'YTVGMkxSbGpvU21KcFFtQThVRUFBNyApICFpbXBvcnRhbnQ7IA0KfQ0KDQovKiANCkJ1c2NhIENvbXVu' +
		'aWRhZGUNCiovDQp0cltiZ2NvbG9yPSIjYzlkNmViIl0ge2JhY2tncm91bmQtY29sb3I6ICM2Q0E2Q0Qg' +
		'IWltcG9ydGFudDt9DQp0cltiZ2NvbG9yPSIjYmZkMGVhIl0ge2JhY2tncm91bmQtY29sb3I6ICM3RUMw' +
		'RUUgIWltcG9ydGFudDt9DQp0ZFtiZ2NvbG9yPSIjZTVlY2Y0Il0ge2JhY2tncm91bmQtY29sb3I6ICM4' +
		'N0NFRkYgIWltcG9ydGFudDt9DQp0YWJsZVtiZ2NvbG9yPSIjYmZkMGVhIl0ge2JhY2tncm91bmQtY29s' +
		'b3I6ICM2Q0E2Q0QgIWltcG9ydGFudDsgYm9yZGVyLXN0eWxlOiBkYXNoZWQgIWltcG9ydGFudDsgYm9y' +
		'ZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudH0NCi8qIA0KQW1pZ29zDQoqLw0KdGFibGUua2FybWF0YWJs' +
		'ZSB0ZCB7DQogIGJhY2tncm91bmQtY29sb3I6ICM3RUMwRUUgIWltcG9ydGFudDsNCn0NCnRhYmxlLmZy' +
		'aWVuZHRhYmxlIHRkIHsNCiAgYmFja2dyb3VuZC1jb2xvcjogIzdFQzBFRSAhaW1wb3J0YW50Ow0KfQ0K' +
		'LyogDQpVbml2ZXJzYWwgU2VhcmNoDQoqLw0KdGFibGVbYmdjb2xvcj0iI2U1ZWNmNCJdIHsNCiAgYmFj' +
		'a2dyb3VuZC1jb2xvcjogIzZjYTZjZCAhaW1wb3J0YW50Ow0KfQ0KDQoNCmltZ1tzcmMqPSdibC5naWYn' +
		'XSxpbWdbc3JjKj0nYnIuZ2lmJ117DQoJZGlzcGxheTpub25lICFpbXBvcnRhbnQ7DQp9DQoNCiNzY3Jh' +
		'cFRleHQgew0KCXdpZHRoOiA4NTBweCAhaW1wb3J0YW50Ow0KCWhlaWdodDogMTcwcHggIWltcG9ydGFu' +
		'dDsNCgliYWNrZ3JvdW5kOiAjQzNERkYzICFpbXBvcnRhbnQ7DQp9DQoNCnRkW3N0eWxlKj0iYm0uZ2lm' +
		'Il0NCnsNCiAgIHRleHQtYWxpZ246IGNlbnRlcjsNCiAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7DQoJ' +
		'YmFja2dyb3VuZDogIzZDQTZDRCAhaW1wb3J0YW50Ow0KICAgYm9yZGVyOiAycHggb3V0c2V0ICM3RUMw' +
		'RUU7DQoJcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7DQoJLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6' +
		'IDFlbTsgDQoJLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAxZW07DQoJLW1vei1ib3JkZXItcmFk' +
		'aXVzLWJvdHRvbXJpZ2h0OiAxZW07IA0KCS1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAxZW07' +
		'DQp9DQoNCi8qIA0KSWRlaWFzIGRlIG91dHJhcyBza2lucw0KKi8NCmltZ1tzcmMqPSIvc21hbGwvIl0s' +
		'DQppbWdbc3JjKj0iL2tsZWluLyJdDQp7DQpvcGFjaXR5OiAwLjgwICFpbXBvcnRhbnQ7DQp9DQppbWdb' +
		'c3JjKj0iL3NtYWxsLyJdOmhvdmVyLA0KaW1nW3NyYyo9Ii9rbGVpbi8iXTpob3Zlcg0Kew0Kb3BhY2l0' +
		'eTogMS4wMCAhaW1wb3J0YW50Ow0KYm9yZGVyLXN0eWxlOiBkYXNoZWQgIWltcG9ydGFudDsNCmJvcmRl' +
		'ci13aWR0aDogMXB4ICFpbXBvcnRhbnQNCn0NCg0KLyogDQpDU1MgRGVmYXVsdCBtb2RpZmljYWRhDQoq' +
		'Lw0KLm5ld3NJdGVtIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9DQoucGFuZWwgeyBib3JkZXIt' +
		'c3R5bGU6IGRhc2hlZCAhaW1wb3J0YW50OyBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50fQ0KLm5h' +
		'dmluZm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjN0VDMEVFICFpbXBvcnRhbnQ7IH0NCi5yb3dMYWJlbCB7' +
		'IHdpZHRoOiAxMjhweDsgfQ0KLmNhdGVnb3J5IHsgYmFja2dyb3VuZC1jb2xvcjogIzdFQzBFRSAhaW1w' +
		'b3J0YW50OyB9DQoNCmJvZHkgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE3MDhCICFpbXBvcnRhbnQ7IGNv' +
		'bG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1z' +
		'ZXJpZjsgZm9udC1zaXplOiA4NCU7IG1hcmdpbjogMTBweDsgfQ0KDQp0YWJsZSB7IGZvbnQtc2l6ZTog' +
		'MTJweDsgfQ0KdGggeyB0ZXh0LWFsaWduOiBsZWZ0OyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9' +
		'DQoNCmE6bGluayB7IGNvbG9yOiAjMTkxOTcwICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogdW5k' +
		'ZXJsaW5lOyB9DQphOnZpc2l0ZWQgeyBjb2xvcjogIzE5MTk3MCAhaW1wb3J0YW50OyB0ZXh0LWRlY29y' +
		'YXRpb246IHVuZGVybGluZTsgfQ0KYTpob3ZlciB7IGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IHRl' +
		'eHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9DQoNCmEgaW1nIHsgYm9yZGVyOiAwOyB9DQoNCnVsIHsg' +
		'bGlzdC1zdHlsZS1pbWFnZTogdXJsKCcvaW1nL2lfYnVsbGV0LmdpZicpOyBsaXN0LXN0eWxlLXBvc2l0' +
		'aW9uOiBvdXRzaWRlOyBtYXJnaW46IDVweDsgcGFkZGluZzogMDsgfQ0KbGkgeyBsaW5lLWhlaWdodDog' +
		'MS41ZW07IG1hcmdpbi1sZWZ0OiAxNXB4OyB9DQoNCiNoZWFkZXIgeyBmb250LXNpemU6IDExcHg7IH0N' +
		'CiNoZWFkZXIgYTpsaW5rIHsgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9u' +
		'OiBub25lOyB9DQojaGVhZGVyIGE6dmlzaXRlZCB7IGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IHRl' +
		'eHQtZGVjb3JhdGlvbjogbm9uZTsgfQ0KI2hlYWRlciBhOmhvdmVyIHsgY29sb3I6ICM4N0NFRUIgIWlt' +
		'cG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9DQojaGVhZGVyTWVudSB7IA0KIGJhY2tncm91' +
		'bmQtY29sb3I6ICM2Q0E2Q0QgIWltcG9ydGFudDsNCiB9DQogDQogdGRbdmFsaWduPSJ0b3AiXVt3aWR0' +
		'aD0iNTk0Il17DQogCXdpZHRoOiA5OCUgIWltcG9ydGFudDsNCglwb3NpdGlvbjogYWJzb2x1dGU7DQoJ' +
		'bGVmdDogMTBweDsNCgkNCiB9DQoNCg0KIA0KI2hlYWRlck1lbnUgYTpsaW5rIHsgY29sb3I6ICNmZmZm' +
		'ZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9DQojaGVhZGVyTWVudSBhOnZpc2l0' +
		'ZWQgeyBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0NCiNo' +
		'ZWFkZXJNZW51IGE6aG92ZXIgeyBjb2xvcjogIzg3Q0VFQiAhaW1wb3J0YW50OyB0ZXh0LWRlY29yYXRp' +
		'b246IG5vbmU7IH0NCiNoZWFkZXJFbWFpbCB7IGZvbnQtd2VpZ2h0OiBib2xkOyB9DQoNCiNmb290ZXIg' +
		'eyBjb2xvcjogIzIyNDJDMDsgZm9udC1zaXplOiAxMHB4OyB9DQojZm9vdGVyTWVudSB7IGJhY2tncm91' +
		'bmQtY29sb3I6ICM2Q0E2Q0QgIWltcG9ydGFudDsgY29sb3I6ICNGRkZGRkY7IH0NCiNmb290ZXJNZW51' +
		'IGE6bGluayB7IGNvbG9yOiAjRkZGRkZGOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0NCiNmb290ZXJN' +
		'ZW51IGE6dmlzaXRlZCB7IGNvbG9yOiAjRkZGRkZGOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0NCiNm' +
		'b290ZXJNZW51IGE6aG92ZXIgeyBjb2xvcjogIzAwMDAwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9' +
		'DQojZm9vdGVyIHRkLmJvcmRlclRvcCB7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjNkU5NkQ1OyB9DQoN' +
		'CnRhYmxlLnBhbmVsIHsgYmFja2dyb3VuZC1jb2xvcjogIzZDQTZDRCAhaW1wb3J0YW50OyBib3JkZXI6' +
		'IDFweCBzb2xpZCAjQTFCQkU0OyB9DQoucGFuZWxIZWFkZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjODdD' +
		'RUZGICFpbXBvcnRhbnQ7IGNvbG9yOiAjMDAwMDAwOyBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWws' +
		'IFNhbnMtU2VyaWY7IGZvbnQtd2VpZ2h0OiBib2xkOyBoZWlnaHQ6IDIwcHg7IHBhZGRpbmctbGVmdDog' +
		'NXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IHZlcnRpY2Fs' +
		'LWFsaWduOiBtaWRkbGU7IH0NCi5wYW5lbEhlYWRlck5vdGUgeyBmb250LXdlaWdodDogbm9ybWFsOyB9' +
		'DQp0ZC5wYW5lbCB7IHBhZGRpbmc6IDVweDsgfQ0KDQp0ZC5wYW5lbEZvb3RlciB7IGJhY2tncm91bmQt' +
		'Y29sb3I6ICM2Q0E2Q0QgIWltcG9ydGFudDsgfQ0KDQouc21hbGxMaW5rIGEgeyBmb250LXNpemU6IDky' +
		'JTsgfQ0KDQouaGlnaGxpZ2h0IHsgY29sb3I6ICNGRkZGRkY7IH0NCi5vcmt1dFRpdGxlIHsgY29sb3I6' +
		'ICNDNDAwOTg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9DQoNCi5yb3dMYWJlbCB7IGNvbG9yOiAjMTkxOTcw' +
		'OyB0ZXh0LWFsaWduOiByaWdodDsgdmVydGljYWwtYWxpZ246IHRvcDsgfQ0KLnJvdzEgeyBiYWNrZ3Jv' +
		'dW5kLWNvbG9yOiAjNkNBNkNEICFpbXBvcnRhbnQ7IH0NCi5yb3cwIHsgYmFja2dyb3VuZC1jb2xvcjog' +
		'IzdFQzBFRSAhaW1wb3J0YW50OyB9DQoNCi50YWJBY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlE' +
		'NkVCOyBib3JkZXItdG9wOiAxcHggc29saWQgI0ExQkJFNDsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAj' +
		'QTFCQkU0OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNHB4IDhweDsgd2hpdGUtc3BhY2U6IG5v' +
		'd3JhcDsgfQ0KLnRhYkluYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0Q4RERFNTsgYm9yZGVyOiAx' +
		'cHggc29saWQgI0ExQkJFNDsgYm9yZGVyLXJpZ2h0OiBub25lOyBwYWRkaW5nOiA0cHggOHB4OyB3aGl0' +
		'ZS1zcGFjZTogbm93cmFwOyB9DQoudGFiQWN0aXZlU3BhY2VyIHsgYmFja2dyb3VuZC1jb2xvcjogI0Q4' +
		'RERFNTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNBMUJCRTQ7IGJvcmRlci1ib3R0b206IDFweCBzb2xp' +
		'ZCAjQzlENkVCOyB9DQoudGFiSW5hY3RpdmVTcGFjZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlENkVC' +
		'OyBib3JkZXItdG9wOiAxcHggc29saWQgI0ExQkJFNDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNB' +
		'MUJCRTQ7IH0NCi50YWJTcGFjZXIgeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ExQkJFNDsgfQ0K' +
		'LnRhYlBhbmVsIHsgYmFja2dyb3VuZC1jb2xvcjogI0M5RDZFQjsgYm9yZGVyOiAxcHggc29saWQgI0Ex' +
		'QkJFNDsgYm9yZGVyLXRvcDogbm9uZTsgfQ0KDQouZXJyb3IgeyBjb2xvcjogI0ZGNjY2NjsgfQ0KLmlu' +
		'bGluZUVycm9yIHsgY29sb3I6ICM5OTMzNjY7IGZvbnQtd2VpZ2h0OiBib2xkOyB9DQoNCnVsLm5hdiB7' +
		'IGZvbnQtc2l6ZTogOTQlOyBsaXN0LXN0eWxlOiBub25lOyBsaXN0LXN0eWxlLWltYWdlOiBub25lOyBt' +
		'YXJnaW46IDAgMCA1cHggMDsgcGFkZGluZzogMDsgfQ0KbGkubmF2TGlzdCB7IGJhY2tncm91bmQtY29s' +
		'b3I6ICM4N0NFRkYgIWltcG9ydGFudDsgaGVpZ2h0OiAyMHB4OyBsaW5lLWhlaWdodDogMjBweDsgbWFy' +
		'Z2luOiAxcHggNXB4IDJweCA1cHg7IHBhZGRpbmc6IDA7IHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7' +
		'IH0NCmxpLm5hdkxpc3QgYSB7IGNvbG9yOiAjMDAwMDAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6' +
		'IGJsb2NrOyBoZWlnaHQ6IDIwcHg7IH0NCmxpLm5hdkxpc3QgYTpsaW5rIHsgY29sb3I6ICMwMDAwMDA7' +
		'IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfQ0KbGkubmF2TGlzdCBhOnZpc2l0ZWQgeyBjb2xvcjogIzAw' +
		'MDAwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9DQpsaS5uYXZMaXN0IGE6aG92ZXIgeyBiYWNrZ3Jv' +
		'dW5kLWNvbG9yOiAjNEE3MDhCICFpbXBvcnRhbnQ7IGNvbG9yOiAjRkZGRkZGOyB0ZXh0LWRlY29yYXRp' +
		'b246IG5vbmU7IH0NCi5uYXZJbmZvIHsgYmFja2dyb3VuZC1jb2xvcjogI0U1RUNGNDsgZm9udC1zaXpl' +
		'OiA5MiU7IHBhZGRpbmc6IDJweCA4cHggMnB4IDhweDsgfQ0KDQpkaXYubm9QaG90byB7IGJhY2tncm91' +
		'bmQtY29sb3I6ICMwMDAwMDA7IGJvcmRlcjogMXB4IHNvbGlkICM5RjlGOUY7IH0NCg0KLyogZm9ybSBl' +
		'bGVtZW50cyAqLw0KDQpmb3JtIHsgbWFyZ2luOiAwOyB9DQoNCmlucHV0LCBzZWxlY3QgeyBmb250LWZh' +
		'bWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTJweDsgfQ0KDQovKiBwYWdlIHNwZWNp' +
		'ZmljIHN0eWxlcyAqLw0KDQoudGl0bGUgeyBjb2xvcjogIzAwMDAwMDsgZm9udC1mYW1pbHk6IFZlcmRh' +
		'bmEsIEFyaWFsLCBTYW5zLVNlcmlmOyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9' +
		'DQouY29tbXVuaXR5VGl0bGUgeyBjb2xvcjogIzAwMDAwMDsgZm9udC1zaXplOiAxNnB4OyBmb250LXdl' +
		'aWdodDogYm9sZDsgfQ0KLnByb2ZpbGVUaXRsZSB7IGNvbG9yOiAjMDAwMDAwOyBmb250LWZhbWlseTog' +
		'VmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IGJv' +
		'bGQ7IH0NCg0KLmNhcGl0YWxpemVkVGl0bGUgeyBjb2xvcjogIzI5NkRDMTsgZm9udC1mYW1pbHk6IFRh' +
		'aG9tYSwgVmVyZGFuYSwgQXJpYWwsIFNhbnMtU2VyaWY7IGZvbnQtc2l6ZTogMjRweDsgfQ0KDQojc3Rh' +
		'dHVzTXNnIHRhYmxlLnBhbmVsIHsgd2lkdGg6IDYwMHB4OyB9DQojc3RhdHVzTXNnLmVycm9yIHRhYmxl' +
		'LnBhbmVsIHsgYm9yZGVyOiAjRDNCRTk2IDFweCBzb2xpZDsgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjBE' +
		'OCB9DQojc3RhdHVzTXNnLndhcm5pbmcgdGFibGUucGFuZWwgeyBib3JkZXI6ICNEM0JFOTYgMXB4IHNv' +
		'bGlkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGMEQ4IH0NCiNzdGF0dXNNc2cuaW5mbyB0YWJsZS5wYW5l' +
		'bCB7IGJvcmRlcjogI0QzQkU5NiAxcHggc29saWQ7IGJhY2tncm91bmQtY29sb3I6ICNGQ0YwRDggfQ0K' +
		'DQoNCiNwU29jIC5yb3cxIHsgYmFja2dyb3VuZC1jb2xvcjogI0U0RjJGOTsgfQ0KI3BTb2MgLnJvdzAg' +
		'eyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9DQojcFBybyAucm93MSB7IGJhY2tncm91bmQtY29s' +
		'b3I6ICNFQkZGRUQ7IH0NCiNwUHJvIC5yb3cwIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfQ0K' +
		'I3BQZXIgLnJvdzEgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGMEQ4OyB9DQojcFBlciAucm93MCB7IGJh' +
		'Y2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH0NCg0KI2NvbW11bml0eSAucm93MSB7IGJhY2tncm91bmQt' +
		'Y29sb3I6ICNGMEU4RjU7IH0NCiNjb21tdW5pdHkgLnJvdzAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZG' +
		'RkZGOyB9DQoNCnRhYmxlICNwcm9maWxlVG9wIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfQ0K' +
		'LnByb2ZpbGVDYXRlZ29yeSB7IGNvbG9yOiAjRkZGRkZGOyBmb250LXNpemU6IDExcHg7IH0NCg0KdGFi' +
		'bGUuY29tbXVuaXR5VG9wIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfQ0KDQovKiBUaGlzIGlz' +
		'IGZvciB0aGUgZGlzcGxheSBvZiBmdW5ueSBtZXNzYWdlcyB3aGlsZSB1c2VycyB3YWl0IGZvciBpbWFn' +
		'ZSB1cGxvYWQgKi8NCi5mdW5ueU1zZyB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXdlaWdodDogYm9sZDsg' +
		'Zm9udC1zaXplOiAxLjVlbTsgfQ0KDQojdGV4dFBhbmVsIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZG' +
		'RjsgY29sb3I6ICMwMDAwMDA7IH0=';



  style = document.createElement('link');
  style . href = css ;
  style . rel  = 'stylesheet';
  style . type = 'text/css';
 
document.getElementsByTagName('head').item(0).appendChild(style)