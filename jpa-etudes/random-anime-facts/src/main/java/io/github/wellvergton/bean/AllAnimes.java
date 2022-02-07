package io.github.wellvergton.bean;

import java.util.List;

public class AllAnimes {
	private boolean success;
	private List<Anime> data;
	
	public boolean isSuccess() {
		return success;
	}
	
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public List<Anime> getData() {
		return data;
	}
	
	public void setData(List<Anime> data) {
		this.data = data;
	}
}
