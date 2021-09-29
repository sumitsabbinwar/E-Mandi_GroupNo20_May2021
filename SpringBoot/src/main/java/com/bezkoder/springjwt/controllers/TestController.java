package com.bezkoder.springjwt.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.payload.request.LoginRequest;
import com.bezkoder.springjwt.payload.request.SignupRequest;
import com.bezkoder.springjwt.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	

	
	@PutMapping("/signin/{id}")
	public void updateUser(@PathVariable("id") long id, @RequestBody User user){
		Optional<User> userData = userRepository.findById(id);
		
		if(userData.isPresent()) {
			User _user = userData.get();
			_user.setUsername(user.getUsername());
			_user.setPassword(user.getPassword());
			_user.setEmail(user.getEmail());
			_user.setAdharno(user.getAdharno());
			_user.setContact(user.getContact());
			
			// return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
			userRepository.save(_user);
			// return ResponseEntity.ok();
		}
	}
	
	@DeleteMapping("/signin/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			userRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
//	@PutMapping("/signup")
//	public UserRepository updateFarmerPost(@RequestBody SignupRequest signUpRequest) {
//		userRepository.save(signUpRequest);
//	return "hello";
//	}	
}
